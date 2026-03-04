/**
 * SidebarMenuItem Component
 * Individual navigation menu item with icon and label
 * 
 * @param {Object} props
 * @param {string} props.id - Menu item identifier
 * @param {string} props.label - Display label
 * @param {Component} props.icon - React icon component
 * @param {boolean} props.isActive - Whether this item is currently active
 * @param {Function} props.onClick - Click handler
 */
export default function SidebarMenuItem({ id, label, icon, isActive, onClick }) {
  const Icon = icon;
  
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full flex items-center px-4 py-3 mb-2 text-left transition-all duration-200 rounded-lg ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon className="text-xl mr-3" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
