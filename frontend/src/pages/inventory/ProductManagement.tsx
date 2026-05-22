import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductManagement() {
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
            <Link to="/inventory" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">grid_view</span>
              Dashboard
            </Link>
            <Link to="/products" className="flex items-center gap-3 px-3 py-2.5 bg-blue-100 text-blue-700 rounded-lg font-medium border-l-4 border-blue-600">
              <span className="material-symbols-outlined">inventory</span>
              Products
            </Link>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">category</span>
              Categories
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <span className="material-symbols-outlined">monitoring</span>
              Inventory Adjustments
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
              placeholder="Search products, SKU or category..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-slate-500 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined">schedule</span>
            </button>
            <button className="text-slate-500 hover:text-slate-700 transition-colors">
              <span className="material-symbols-outlined">storefront</span>
            </button>
            
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold leading-tight">Alex Johnson</p>
                <p className="text-xs text-slate-400">Floor Manager</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=0D8ABC&color=fff" alt="User" className="w-9 h-9 rounded-full border border-slate-200" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            {/* Title & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Product Inventory</h1>
                <p className="text-slate-500 text-sm mt-1">Real-time management of stock levels and expiration dates.</p>
              </div>
              <div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-sm">add</span>
                  Add New Product
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Total SKU Items */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">inventory_2</span>
                  </div>
                  <span className="text-xs font-semibold text-green-600">+2% vs last week</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">1,284</p>
                  <p className="text-sm text-slate-500 font-medium">Total SKU Items</p>
                </div>
              </div>

              {/* Out of Stock */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">warning</span>
                  </div>
                  <span className="text-xs font-semibold text-red-600">Critical</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">24</p>
                  <p className="text-sm text-slate-500 font-medium">Out of Stock</p>
                </div>
              </div>

              {/* Expiring Soon */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">event_busy</span>
                  </div>
                  <span className="text-xs font-semibold text-orange-600">Next 7 Days</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">12</p>
                  <p className="text-sm text-slate-500 font-medium">Expiring Soon</p>
                </div>
              </div>

              {/* Inventory Value */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">trending_up</span>
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">$42.1k</p>
                  <p className="text-sm text-slate-500 font-medium">Inventory Value</p>
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm border border-slate-200">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  Filter By:
                </div>
                <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 outline-none">
                  <option>All Categories</option>
                </select>
                <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 outline-none">
                  <option>Stock Status</option>
                </select>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-2 bg-blue-50 text-blue-600 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">format_list_bulleted</span>
                </button>
              </div>
            </div>

            {/* Table Area */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4">Product</th>
                      <th className="px-6 py-4">SKU / Barcode</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Qty</th>
                      <th className="px-6 py-4">Expiry</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {/* Item 1 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-teal-800 rounded flex-shrink-0 border border-slate-200 flex items-center justify-center overflow-hidden">
                             <div className="w-full h-full bg-teal-800 flex items-center justify-center text-white text-xs">IMG</div>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">Whole Organic Milk</p>
                            <p className="text-xs text-slate-500">1 Liter / Bottle</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-600">001294857731</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Dairy & Eggs</span>
                      </td>
                      <td className="px-6 py-4 font-medium">$4.50</td>
                      <td className="px-6 py-4 font-medium">142</td>
                      <td className="px-6 py-4 text-slate-600">Oct 24, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                          In Stock
                        </span>
                      </td>
                    </tr>

                    {/* Item 2 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-amber-800 rounded flex-shrink-0 border border-slate-200 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-amber-800 flex items-center justify-center text-white text-xs">IMG</div>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">Artisan Sourdough</p>
                            <p className="text-xs text-slate-500">Fresh Baked / 400g</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-600">003884729110</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Bakery</span>
                      </td>
                      <td className="px-6 py-4 font-medium">$6.25</td>
                      <td className="px-6 py-4 font-bold text-red-600">8</td>
                      <td className="px-6 py-4 text-slate-600">Oct 12, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                          Low Stock
                        </span>
                      </td>
                    </tr>

                    {/* Item 3 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-800 rounded flex-shrink-0 border border-slate-200 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-green-800 flex items-center justify-center text-white text-xs">IMG</div>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">Premium Avocado Oil</p>
                            <p className="text-xs text-slate-500">500ml Glass Bottle</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-600">009922118833</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Pantry</span>
                      </td>
                      <td className="px-6 py-4 font-medium">$14.99</td>
                      <td className="px-6 py-4 font-bold text-red-600">0</td>
                      <td className="px-6 py-4 text-slate-600">Feb 15, 2024</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold border border-red-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                          Out of Stock
                        </span>
                      </td>
                    </tr>

                    {/* Item 4 */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-orange-400 rounded flex-shrink-0 border border-slate-200 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-orange-400 flex items-center justify-center text-white text-xs">IMG</div>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">Fresh Salmon Fillet</p>
                            <p className="text-xs text-slate-500">Weight Varies / kg</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-600">004455667788</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Seafood</span>
                      </td>
                      <td className="px-6 py-4 font-medium">$22.00</td>
                      <td className="px-6 py-4 font-medium">34</td>
                      <td className="px-6 py-4 font-medium text-orange-600">Oct 11, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-700"></span>
                          Expiring Soon
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Showing 1-10 of 1,284 products</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 hover:bg-slate-50">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-600 bg-blue-600 text-white text-xs font-bold">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium">3</button>
                  <span className="text-slate-400">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 hover:bg-slate-50">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
