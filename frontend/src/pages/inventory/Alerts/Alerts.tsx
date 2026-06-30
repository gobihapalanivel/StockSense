import { useAuth } from '../../../hooks/useAuth';
import AdminSidebar from "../../admin/Shared/Sidebar";
import AdminHeader from "../../admin/Shared/AdminHeader";
import InventorySidebar from "../Shared/Sidebar";
import InventoryHeader from "../Shared/InventoryHeader";
import { useAlerts } from './hooks/useAlerts';
import AlertSummary from './components/AlertSummary';
import AlertFilterBar from './components/AlertFilterBar';
import EmptyAlertsState from './components/EmptyAlertsState';
import AlertCard from './components/AlertCard';
import NotificationDetailsPopup from '../../../components/shared/NotificationDetailsPopup';

export default function Alerts() {

  const {
    visible,
    unread,
    criticalAlerts,
    lowStockAlerts,
    outOfStockAlerts,
    expiryAlerts,
    deadStockAlerts,
    overstockAlerts,
    reorderSuggestions,
    discountAlerts,
    smartInsights,
    filtered,
    activeTab,
    setActiveTab,
    showFilters,
    setShowFilters,
    sevFilter,
    setSevFilter,
    readFilter,
    setReadFilter,
    tabCount,
    dismiss,
    markRead,
    handlePrimary,
    loading,
    selectedNotification,
    setSelectedNotification,
    loadDynamicAlerts
  } = useAlerts();

  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  return (
    <div className="flex h-screen bg-[#f8f9fa] text-slate-800 font-sans overflow-hidden">
      {isAdmin ? <AdminSidebar /> : <InventorySidebar />}
      <div className="flex-1 flex flex-col overflow-hidden relative">

        {/* Header */}
        {isAdmin ? <AdminHeader /> : <InventoryHeader />}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-6 py-6 bg-[#f8f9fa]">
          <div className="max-w-[1400px] w-full mx-auto space-y-6">

            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Alerts &amp; Notifications</h1>
                <p className="text-slate-500 text-sm mt-1">
                  Monitor inventory health — low stock, expiry dates, dead stock, and reorder needs.
                  {unread > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                      {unread} unread
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Alert Summary KPIs & Smart Insights */}
            <AlertSummary
              totalAlerts={visible.length}
              criticalAlerts={criticalAlerts}
              lowStockAlerts={lowStockAlerts}
              outOfStockAlerts={outOfStockAlerts}
              expiryAlerts={expiryAlerts}
              deadStockAlerts={deadStockAlerts}
              overstockAlerts={overstockAlerts}
              reorderSuggestions={reorderSuggestions}
              discountAlerts={discountAlerts}
              smartInsights={smartInsights}
              setActiveTab={setActiveTab}
              setSevFilter={setSevFilter}
            />

            {/* Tabs & Filter Bar */}
            <AlertFilterBar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabCount={tabCount}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              sevFilter={sevFilter}
              setSevFilter={setSevFilter}
              readFilter={readFilter}
              setReadFilter={setReadFilter}
            />

            {/* Alert Cards */}
            <div className="space-y-4">
              {loading && filtered.length === 0 ? (
                <div className="text-center py-12 text-sm font-bold text-slate-500">
                  Loading active alerts...
                </div>
              ) : filtered.length === 0 ? (
                <EmptyAlertsState
                  setActiveTab={setActiveTab}
                  setSevFilter={setSevFilter}
                  setReadFilter={setReadFilter}
                />
              ) : (
                filtered.map(alert => (
                  <AlertCard
                    key={alert.id}
                    alert={alert}
                    handlePrimary={handlePrimary}
                    dismiss={dismiss}
                    markRead={markRead}
                  />
                ))
              )}
            </div>

          </div>
        </main>
      </div>

      {/* Notification Details Dialog Popup */}
      {selectedNotification && (
        <NotificationDetailsPopup
          notification={selectedNotification}
          onClose={() => setSelectedNotification(null)}
          onActionComplete={loadDynamicAlerts}
        />
      )}
    </div>
  );
}
