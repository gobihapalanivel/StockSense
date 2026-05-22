import React from 'react';
import { Link } from 'react-router-dom';

export default function InventoryPage() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            <span className="material-symbols-outlined text-sm">inventory_2</span>
          </div>
          <div>
            <h1 className="font-bold text-blue-700 leading-tight">StockSense</h1>
            <p className="text-[10px] text-slate-500 font-medium">Supermarket Inventory</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            <Link to="/inventory" className="flex items-center gap-3 px-3 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium border-l-4 border-blue-600">
              <span className="material-symbols-outlined">grid_view</span>
              Dashboard
            </Link>
            <Link to="/products" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">inventory</span>
              Products
            </Link>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">category</span>
              Categories
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">monitoring</span>
              Inventory Monitoring
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">sync_alt</span>
              Stock Movement
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">local_shipping</span>
              Restocking
            </a>
          </nav>

          <div className="mt-8">
            <h2 className="px-6 text-xs font-semibold text-slate-400 tracking-wider uppercase mb-3">System</h2>
            <nav className="space-y-1 px-3">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                Alerts
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined">bar_chart</span>
                Reports
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined">settings</span>
                Settings
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              type="text" 
              placeholder="Search inventory, SKUs, or alerts..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-slate-500 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined">schedule</span>
            </button>
            <button className="text-slate-500 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
            
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold leading-tight">Alex Thompson</p>
                <p className="text-xs text-slate-500">Inventory Manager</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Alex+Thompson&background=0D8ABC&color=fff" alt="User" className="w-9 h-9 rounded-full border border-slate-200" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            {/* Title & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Inventory Overview</h1>
                <p className="text-slate-500 text-sm mt-1">Real-time status of your supermarket stock levels.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-sm">add</span>
                  Add Product
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Total Products */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">inventory_2</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">+12%</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Total Products</p>
                  <p className="text-xl font-bold text-slate-800">12,482</p>
                </div>
              </div>

              {/* Low Stock */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">warning</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-orange-100 text-orange-700 rounded-full">Alert</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Low Stock</p>
                  <p className="text-xl font-bold text-slate-800">84 Items</p>
                </div>
              </div>

              {/* Out of Stock */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">block</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-red-100 text-red-700 rounded-full">Critical</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Out of Stock</p>
                  <p className="text-xl font-bold text-slate-800">12 Items</p>
                </div>
              </div>

              {/* Expiring Soon */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">event_busy</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-full">7 Days</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Expiring Soon</p>
                  <p className="text-xl font-bold text-slate-800">318 Units</p>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">category</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Categories</p>
                  <p className="text-xl font-bold text-slate-800">42 Sectors</p>
                </div>
              </div>

              {/* Pending Restock */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">Active</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Pending Restock</p>
                  <p className="text-xl font-bold text-slate-800">5 Orders</p>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Stock Movement Chart (Mock) */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm lg:col-span-2 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-800">Inventory Stock Movement</h3>
                  <select className="text-sm border-slate-200 rounded-lg text-slate-600 px-3 py-1.5 outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Last 7 Days</option>
                  </select>
                </div>
                <div className="flex-1 flex items-end justify-between gap-2 pt-10 pb-2 border-b border-slate-100">
                  {/* Mock Bar Chart */}
                  <div className="w-full bg-blue-200 rounded-t-sm" style={{ height: '50%' }}></div>
                  <div className="w-full bg-blue-300 rounded-t-sm" style={{ height: '70%' }}></div>
                  <div className="w-full bg-blue-200 rounded-t-sm" style={{ height: '40%' }}></div>
                  <div className="w-full bg-blue-400 rounded-t-sm" style={{ height: '90%' }}></div>
                  <div className="w-full bg-blue-200 rounded-t-sm" style={{ height: '60%' }}></div>
                  <div className="w-full bg-blue-300 rounded-t-sm" style={{ height: '75%' }}></div>
                  <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: '45%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-3 px-2">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              {/* Inventory Health */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                <h3 className="font-bold text-slate-800 mb-6">Inventory Health</h3>
                
                <div className="space-y-5 flex-1">
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">Healthy Stock</span>
                      <span className="text-green-600 font-bold">88%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 w-[88%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">Low Stock Warning</span>
                      <span className="text-orange-500 font-bold">9%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[9%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">Critical/Out</span>
                      <span className="text-red-500 font-bold">2%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[2%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">Expired/Damaged</span>
                      <span className="text-slate-400 font-bold">1%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 w-[1%]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-blue-600 text-sm">auto_awesome</span>
                    <h4 className="font-bold text-blue-800 text-sm">Health Score: Optimal</h4>
                  </div>
                  <p className="text-xs text-blue-600/80 leading-relaxed">Stock turnover is 15% higher than previous month.</p>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Priority Alerts */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-800">Priority Alerts</h3>
                  <button className="text-sm text-blue-600 font-semibold hover:underline">View All</button>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {/* Alert Item 1 */}
                  <div className="flex gap-3 items-start border-l-4 border-red-500 pl-3 py-1">
                    <div>
                      <p className="text-sm font-bold text-slate-800">Milk 1L (SKU-4829) Out of Stock</p>
                      <p className="text-xs text-slate-500 mt-0.5">Immediate restock required for aisle 4.</p>
                      <p className="text-[10px] font-bold text-red-600 mt-1">2 mins ago</p>
                    </div>
                  </div>
                  <hr className="border-slate-100" />
                  
                  {/* Alert Item 2 */}
                  <div className="flex gap-3 items-start border-l-4 border-orange-500 pl-3 py-1">
                    <div>
                      <p className="text-sm font-bold text-slate-800">Expiry Warning: Greek Yogurt</p>
                      <p className="text-xs text-slate-500 mt-0.5">42 units expire in 48 hours. Consider promotion.</p>
                      <p className="text-[10px] font-bold text-orange-600 mt-1">1 hour ago</p>
                    </div>
                  </div>
                  <hr className="border-slate-100" />

                  {/* Alert Item 3 */}
                  <div className="flex gap-3 items-start border-l-4 border-blue-500 pl-3 py-1">
                    <div>
                      <p className="text-sm font-bold text-slate-800">Inventory Audit Scheduled</p>
                      <p className="text-xs text-slate-500 mt-0.5">Monthly audit for 'Dry Goods' starts tomorrow 8 AM.</p>
                      <p className="text-[10px] font-bold text-blue-600 mt-1">4 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm lg:col-span-2 flex flex-col relative overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-800">Recent Activity</h3>
                  <button className="text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-slate-50 text-slate-500 font-medium">
                      <tr>
                        <th className="px-4 py-3 font-medium">Time</th>
                        <th className="px-4 py-3 font-medium">Product</th>
                        <th className="px-4 py-3 font-medium">Action</th>
                        <th className="px-4 py-3 font-medium">Quantity</th>
                        <th className="px-4 py-3 font-medium">User</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="px-4 py-3 text-xs text-slate-500">14:22 PM</td>
                        <td className="px-4 py-3 font-semibold">Organic Bananas (1kg)</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-md">Stock Added</span></td>
                        <td className="px-4 py-3 font-bold text-green-600">+200</td>
                        <td className="px-4 py-3 text-xs text-slate-500">Admin_Mike</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-xs text-slate-500">13:05 PM</td>
                        <td className="px-4 py-3 font-semibold">Whole Wheat Bread</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 text-[10px] font-bold bg-red-100 text-red-700 rounded-md">Waste Removed</span></td>
                        <td className="px-4 py-3 font-bold text-red-600">-15</td>
                        <td className="px-4 py-3 text-xs text-slate-500">J_Doe</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-xs text-slate-500">11:45 AM</td>
                        <td className="px-4 py-3 font-semibold">Sparkling Water 500ml</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 text-[10px] font-bold bg-blue-100 text-blue-700 rounded-md">Transfer</span></td>
                        <td className="px-4 py-3 font-medium">50</td>
                        <td className="px-4 py-3 text-xs text-slate-500">Admin_Mike</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-xs text-slate-500">09:12 AM</td>
                        <td className="px-4 py-3 font-semibold">Dark Chocolate 70%</td>
                        <td className="px-4 py-3"><span className="px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-md">Stock Added</span></td>
                        <td className="px-4 py-3 font-bold text-green-600">+500</td>
                        <td className="px-4 py-3 text-xs text-slate-500">S_Miller</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Floating Add Button overlay representation */}
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>

            {/* AI Insights & Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
              {/* Fast Moving */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-blue-600 mb-2 font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Fast Moving
                </div>
                <h4 className="font-bold text-slate-800 mb-1">Avocados (Hass)</h4>
                <p className="text-xs text-slate-600">Selling 30% faster than average. Consider increasing reorder quantity.</p>
              </div>

              {/* Slow Moving */}
              <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-orange-600 mb-2 font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  Slow Moving
                </div>
                <h4 className="font-bold text-slate-800 mb-1">Canned Artichokes</h4>
                <p className="text-xs text-slate-600">Zero sales in 14 days. Current stock: 45 units. Clear shelf space?</p>
              </div>

              {/* AI Suggestion */}
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-600 mb-2 font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                  AI Suggestion
                </div>
                <h4 className="font-bold text-slate-800 mb-1">Seasonal Peak</h4>
                <p className="text-xs text-slate-600">Barbecue coal demand expected to rise by 200% next weekend due to weather.</p>
              </div>

              {/* Category Share */}
              <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-4 w-full text-left">Category Share</h4>
                <div className="relative w-24 h-24 rounded-full border-[12px] border-slate-100 border-t-blue-600 border-r-blue-600 flex items-center justify-center">
                   <div className="text-center">
                     <p className="text-[10px] text-slate-500 font-bold">Top: Dairy</p>
                   </div>
                </div>
                <div className="flex gap-2 mt-4 text-[10px] font-bold">
                  <span className="px-2 py-0.5 bg-blue-600 text-white rounded">Dairy</span>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded">Produce</span>
                  <span className="px-2 py-0.5 bg-green-400 text-white rounded">Meat</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
