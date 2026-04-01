# ProductModal Component

## Overview
The ProductModal component has been refactored into a modular structure with smaller, focused input components. This modal is used for adding new products or editing existing products in the admin panel.

## Component Structure

```
productModal/
├── index.jsx                 # Main container with form logic
├── ModalHeader.jsx           # Header with title and close button
├── ProductNameInput.jsx      # Product name input field
├── CategoryStockInputs.jsx   # Category ID and stock inputs
├── PriceInputs.jsx          # Price, original price, discount inputs
├── DescriptionInput.jsx      # Description textarea
├── HotProductCheckbox.jsx    # Featured product checkbox
├── ModalActions.jsx          # Cancel and submit buttons
└── README.md                # This file
```

## Component Descriptions

### index.jsx
Main modal container component that:
- Manages form state with useState
- Handles form submission
- Populates form fields when editing existing product
- Coordinates all input sub-components

**Props:**
- `product` (Object|null): Product to edit (null for new product)
- `onClose` (function): Close modal handler
- `onSave` (function): Save product handler

**Form State:**
```javascript
{
  name: string,
  category: string,
  price: string,
  original_price: string,
  discount: number (0-100),
  stock: number,
  description: string,
  is_hot: boolean
}
```

**Features:**
- Full-screen overlay with centered modal
- Scrollable content for small screens
- Form validation (required fields)
- Auto-populate fields when editing

### ModalHeader.jsx
Header section with title and close button.

**Props:**
- `isEditMode` (boolean): Whether editing or adding new
- `onClose` (function): Close button handler

**Features:**
- Sticky positioning during scroll
- Dynamic title based on mode
- Close button with hover effect
- White background with bottom border

### ProductNameInput.jsx
Text input for product name.

**Props:**
- `value` (string): Current input value
- `onChange` (function): Change handler

**Features:**
- Required field
- Focus ring (blue)
- Placeholder text
- Full width

### CategoryStockInputs.jsx
Two-column grid with category ID and stock quantity inputs.

**Props:**
- `values` (Object): Contains category and stock values
- `onChange` (function): Change handler

**Features:**
- Responsive grid (2 columns)
- Both fields required
- Number inputs with min validation
- Stock has min="0" validation

### PriceInputs.jsx
Three-column grid with pricing inputs.

**Props:**
- `values` (Object): Contains price, original_price, and discount
- `onChange` (function): Change handler

**Features:**
- Price (required): Step 0.01, min 0
- Original Price (optional): Step 0.01, min 0
- Discount: 0-100 range
- Responsive grid (3 columns)

### DescriptionInput.jsx
Multiline textarea for product description.

**Props:**
- `value` (string): Current textarea value
- `onChange` (function): Change handler

**Features:**
- 4 rows height
- Optional field
- Placeholder text
- Full width with focus ring

### HotProductCheckbox.jsx
Checkbox to mark product as hot/featured.

**Props:**
- `checked` (boolean): Checkbox state
- `onChange` (function): Change handler

**Features:**
- Blue accent color
- Label text
- Focus ring

### ModalActions.jsx
Footer with cancel and submit buttons.

**Props:**
- `isEditMode` (boolean): Whether editing or adding
- `onCancel` (function): Cancel button handler

**Features:**
- Right-aligned buttons with spacing
- Cancel: Gray border, hover effect
- Submit: Blue background, dynamic text
- Border top separator

## Form Flow

1. **Opening Modal:**
   - Parent passes product (or null) and onSave/onClose handlers
   - index.jsx initializes form state
   - If product exists, useEffect populates fields

2. **User Input:**
   - User types in any input field
   - onChange fires → handleChange in index.jsx
   - Form state updates
   - Input component re-renders with new value

3. **Submission:**
   - User clicks submit button
   - Form onSubmit fires → handleSubmit
   - Calls onSave with formData
   - Parent handles save operation

4. **Cancellation:**
   - User clicks Cancel or X button
   - Calls onClose
   - Parent removes modal

## Validation

### Required Fields
- Product Name
- Category ID
- Price
- Stock Quantity

### Field Constraints
- Price: Positive decimal (0.01 step)
- Original Price: Positive decimal (0.01 step)
- Discount: Integer 0-100
- Stock: Non-negative integer
- Category: Positive integer

## Styling

### Modal Container
- Fixed overlay: `fixed inset-0 bg-black bg-opacity-50`
- Centered: `flex items-center justify-center`
- Z-index: 50 (above all content)
- Padding: 16px for mobile

### Modal Content
- Max width: 672px (2xl)
- Max height: 90vh (scrollable)
- White background
- Rounded corners (xl)
- Shadow (2xl)

### Form Layout
- Padding: 24px
- Vertical spacing: 16px (space-y-4)
- Input fields: Full width, rounded-lg, focus ring

### Input Styling
- Border: Gray-300
- Focus: Blue ring, transparent border
- Padding: 16px horizontal, 8px vertical
- Placeholder: Gray text

## Usage

```javascript
import ProductModal from './components/admin/ProductModal';

// In parent component
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const handleSave = (formData) => {
  if (selectedProduct) {
    // Update existing product
    dispatch(updateProduct({ id: selectedProduct.id, ...formData }));
  } else {
    // Create new product
    dispatch(createProduct(formData));
  }
  setIsModalOpen(false);
};

// Render
{isModalOpen && (
  <ProductModal 
    product={selectedProduct}
    onClose={() => setIsModalOpen(false)}
    onSave={handleSave}
  />
)}
```

## Benefits of This Structure

1. **Separation of Concerns**: Each input type has its own component
2. **Reusability**: Input components can be reused in other forms
3. **Maintainability**: Easy to modify individual fields
4. **Testability**: Small components are easy to unit test
5. **Readability**: Clear component structure and naming
6. **Flexibility**: Easy to add/remove fields

## Future Enhancements

1. Add image upload functionality
2. Implement category dropdown (instead of ID input)
3. Add rich text editor for description
4. Create multi-step form wizard
5. Add real-time validation feedback
6. Implement auto-save draft
7. Add product tags/labels
8. Create SKU generator
9. Add inventory alert thresholds
10. Implement batch product upload

## Related Components

- **AdminProducts**: Parent component that opens this modal
- **ProductsTable**: Displays products (Edit button opens modal)
- **productThunks**: Redux async actions for CRUD operations

## Dependencies

- React (useState, useEffect)
- react-icons/io5 (IoCloseOutline)
- Tailwind CSS for styling
- Parent component for Redux integration
