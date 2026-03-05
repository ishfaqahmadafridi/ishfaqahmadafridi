import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import MenCategoryGrid from './MenCategoryGrid';

export default function MenCategory() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="bg-white py-16 px-6">
            <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
                <h2 className="text-3xl font-black uppercase tracking-tighter">
                    Shop By Men Category
                </h2>
                <button
                    onClick={() => {
                        dispatch(setSelectedCategory(null));
                        navigate('/men');
                    }}
                    className="text-sm font-bold uppercase tracking-wider hover:underline"
                >
                    View All
                </button>
            </div>
            <MenCategoryGrid />
        </div>
    );
}
