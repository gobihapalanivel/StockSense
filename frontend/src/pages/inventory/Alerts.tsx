import React, { useState } from 'react';
import Sidebar from "./Components/Sidebar";
import InventoryHeader from "./Components/InventoryHeader";

export default function Alerts() {
  const [activeTab, setActiveTab] = useState('All Alerts');

  return (
    <div className="flex h-screen bg-[#f8f9fa] text-slate-800 font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <InventoryHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
          <div className="max-w-[1000px] w-full mx-auto p-6 md:p-8 space-y-6">

            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Alerts & Notifications</h2>
                <p className="text-slate-500 text-sm mt-1">Manage inventory levels, expiry dates, and unusual sales patterns.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span> Filters
                </button>
                <button className="flex items-center gap-2 bg-[#0b8252] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-[#096b43] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">done_all</span> Mark All Read
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">warning</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Critical Issues</p>
                  <h3 className="text-2xl font-bold text-red-600">12</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Low Stock</p>
                  <h3 className="text-2xl font-bold text-amber-600">48</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 text-[#0b8252] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">trending_up</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Growth Alerts</p>
                  <h3 className="text-2xl font-bold text-[#0b8252]">06</h3>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 border-b border-slate-200 overflow-x-auto">
              {['All Alerts', 'Low Stock', 'Expiry', 'Unusual Sales'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 text-sm font-bold border-b-2 transition-colors duration-200 whitespace-nowrap ${activeTab === tab
                      ? 'border-[#0b8252] text-[#0b8252]'
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Alerts List */}
            <div className="space-y-4">
              {/* Alert 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex overflow-hidden">
                <div className="w-1.5 bg-red-600 flex-shrink-0"></div>
                <div className="p-5 flex flex-col sm:flex-row gap-5 flex-1">
                  <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-slate-400 text-[32px]">water_drop</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded uppercase tracking-wider">Critical</span>
                      <span className="text-xs text-slate-400 font-medium">2 mins ago</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">Fresh Organic Milk (1L) - Critical Low</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Inventory level is currently at 5 units. Recommended restock quantity: 120 units based on average daily sales.</p>
                  </div>
                  <div className="flex sm:flex-col gap-2 justify-center mt-4 sm:mt-0 min-w-[140px]">
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">View Details</button>
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-[#0b8252] text-white font-bold text-sm rounded-lg shadow-sm hover:bg-[#096b43] transition-colors">Restock Now</button>
                  </div>
                </div>
              </div>

              {/* Alert 2 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex overflow-hidden">
                <div className="w-1.5 bg-amber-600 flex-shrink-0"></div>
                <div className="p-5 flex flex-col sm:flex-row gap-5 flex-1">
                  <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-slate-400 text-[32px]">set_meal</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase tracking-wider">Warning</span>
                      <span className="text-xs text-slate-400 font-medium">45 mins ago</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">Angus Beef Patties (4pk) - Expiring Soon</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Batch #4492 expires in 48 hours. 15 units remaining in stock. Consider immediate markdown.</p>
                  </div>
                  <div className="flex sm:flex-col gap-2 justify-center mt-4 sm:mt-0 min-w-[140px]">
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">Dismiss</button>
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-amber-700 text-white font-bold text-sm rounded-lg shadow-sm hover:bg-amber-800 transition-colors">Apply 25% Discount</button>
                  </div>
                </div>
              </div>

              {/* Alert 3 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex overflow-hidden">
                <div className="w-1.5 bg-blue-600 flex-shrink-0"></div>
                <div className="p-5 flex flex-col sm:flex-row gap-5 flex-1">
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-500 text-[32px]">show_chart</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">Info</span>
                      <span className="text-xs text-slate-400 font-medium">2 hours ago</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">Sudden Sales Surge: Sunscreen Lotion</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Sales for category "Skincare" are 300% higher than average for a Tuesday morning. Possible seasonal demand detected.</p>
                  </div>
                  <div className="flex sm:flex-col gap-2 justify-center mt-4 sm:mt-0 min-w-[140px]">
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">Ignore</button>
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-[#0b8252] text-white font-bold text-sm rounded-lg shadow-sm hover:bg-[#096b43] transition-colors">View Analytics</button>
                  </div>
                </div>
              </div>

              {/* Alert 4 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex overflow-hidden">
                <div className="w-1.5 bg-amber-600 flex-shrink-0"></div>
                <div className="p-5 flex flex-col sm:flex-row gap-5 flex-1">
                  <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-slate-400 text-[32px]">eco</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase tracking-wider">Warning</span>
                      <span className="text-xs text-slate-400 font-medium">5 hours ago</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">Fresh Avocados - Low Stock</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Stock level is reaching reorder point. Current: 24 units. Forecasted run-out by end of business day.</p>
                  </div>
                  <div className="flex sm:flex-col gap-2 justify-center mt-4 sm:mt-0 min-w-[140px]">
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">View History</button>
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-[#0b8252] text-white font-bold text-sm rounded-lg shadow-sm hover:bg-[#096b43] transition-colors">Quick Order</button>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Button */}
            <div className="flex justify-center mt-8 pb-8">
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 font-bold text-sm rounded-lg hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-[18px]">expand_more</span> Load Older Notifications
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
