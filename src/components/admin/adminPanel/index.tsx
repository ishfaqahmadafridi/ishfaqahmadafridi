import { useUiStore } from '../../zustand/admin/uiStore';
import { useAuthStore } from '../../zustand/auth/authStore';
import AdminSidebar from '../adminSidebar/index';
import AccessDenied from './AccessDenied';
import AdminHeader from './AdminHeader';
import AdminContent from './AdminContent';

export default function AdminPanel() {
  const { currentView } = useUiStore();
  const canAccess = useAuthStore((state) => state.isAuthenticated);

  if (!canAccess) {
    return <AccessDenied />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <AdminHeader />
        <AdminContent currentView={currentView} />
      </div>
    </div>
  );
}
