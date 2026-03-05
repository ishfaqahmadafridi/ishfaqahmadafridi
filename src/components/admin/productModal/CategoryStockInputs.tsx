import { useState, useEffect } from 'react';
import type { CategoryStockInputsProps } from '../../interfaces/admin/productModal/productModalInterface';
import type { ChangeEvent } from 'react';
import { IoCloudUploadOutline, IoImageOutline } from 'react-icons/io5';
import api from '../../../api/client';

interface Subcategory {
  id: number;
  name: string;
  slug: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number | null;
  subcategories?: Subcategory[];
}

export default function CategoryStockInputs({
  category,
  stock,
  image,
  onCategoryChange,
  onStockChange,
  onImageChange,
}: CategoryStockInputsProps) {
  const [preview, setPreview] = useState<string>(image || '');
  const [parentCategories, setParentCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [selectedParent, setSelectedParent] = useState<string>('');

  useEffect(() => {
    // Fetch parent categories from backend
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories/parents/');
        console.log('Parent categories response:', response);
        const categories = response as unknown as Category[];
        console.log('Parsed categories:', categories);
        setParentCategories(Array.isArray(categories) ? categories : []);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        // Fallback categories
        setParentCategories([
          { id: 1, name: "Men", slug: "men", parent: null, subcategories: [] },
          { id: 2, name: "Women", slug: "women", parent: null, subcategories: [] },
          { id: 3, name: "Kids", slug: "kids", parent: null, subcategories: [] },
        ]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    // Update subcategories when parent changes
    if (selectedParent) {
      const parent = parentCategories.find(p => p.id === parseInt(selectedParent));
      console.log('Selected parent:', selectedParent, 'Found:', parent);
      console.log('Subcategories:', parent?.subcategories);
      
      if (parent?.subcategories && parent.subcategories.length > 0) {
        setSubcategories(parent.subcategories);
      } else {
        // Fetch subcategories for this parent
        console.log('Fetching subcategories from API...');
        api.get(`/categories/?parent=${selectedParent}`)
          .then((response) => {
            console.log('API response:', response);
            const subs = response as unknown as Subcategory[];
            setSubcategories(Array.isArray(subs) ? subs : []);
          })
          .catch((err) => {
            console.error('Failed to fetch subcategories:', err);
            setSubcategories([]);
          });
      }
    } else {
      setSubcategories([]);
    }
  }, [selectedParent, parentCategories]);

  // Reset category when parent changes
  useEffect(() => {
    if (selectedParent) {
      onCategoryChange('');
    }
  }, [selectedParent]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPreview(base64);
        onImageChange(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Main Category *
          </label>
          <select
            value={selectedParent}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedParent(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Main Category</option>
            {parentCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subcategory *
          </label>
          <select
            value={category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onCategoryChange(e.target.value)}
            required
            disabled={!selectedParent}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">{selectedParent ? 'Select Subcategory' : 'Select Main Category First'}</option>
            {subcategories.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stock *
          </label>
          <input
            type="number"
            value={stock}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onStockChange(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Image
        </label>
        <div className="flex gap-4">
          <label className="flex-1 cursor-pointer">
            <div className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <IoCloudUploadOutline className="text-xl text-gray-500" />
              <span className="text-sm text-gray-600">Choose file from PC</span>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {(preview || image) && (
            <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
              <img
                src={preview || image}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {!preview && !image && (
            <div className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50 flex-shrink-0">
              <IoImageOutline className="text-2xl text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
