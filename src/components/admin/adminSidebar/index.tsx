import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentView, setCurrentView } from '../../redux/slices/admin/adminSlice';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import BackToStoreButton from './BackToStoreButton';

export default function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentView = useSelector(selectCurrentView);

  const handleNavigation = (viewId: string) => {
    dispatch(setCurrentView(viewId));
  };

  const handleBackToStore = () => {
    navigate('/home');
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white flex flex-col shadow-xl">
      <SidebarHeader />
      <div className="flex-1 overflow-y-auto">
        <SidebarNav currentView={currentView} onNavigate={handleNavigation} />
      </div>
      <BackToStoreButton onClick={handleBackToStore} />
    </aside>
  );
}
