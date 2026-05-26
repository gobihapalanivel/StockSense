import Sidebar from "./Components/Sidebar";
import InventoryHeader from './Components/InventoryHeader';
import StatusBadge from './Components/inventory/StatusBadge';
import { useState } from 'react';

const mockSuppliers = [
  {
    id: '1',
    name: 'ABC Distributors',
    company: 'ABC Logistics Pvt Ltd',
    contact: 'John Doe',
    phone: '+94 77 123 4567',
    email: 'john@abcdistributors.com',
    products: 45,
    reliability: 96,
    onTime: 98,
    status: 'Active',
  },
  {
    id: '2',
    name: 'Fresh Foods Ltd',
    company: 'Fresh Foods Sri Lanka',
    contact: 'Jane Smith',
    phone: '+94 71 987 6543',
    email: 'jane@freshfoodslk.com',
    products: 120,
    reliability: 92,
    onTime: 95,
    status: 'Active',
  },
  {
    id: '3',
    name: 'Lanka Grocery Suppliers',
    company: 'LGS Holdings',
    contact: 'Kamal Perera',
    phone: '+94 75 555 5555',
    email: 'kamal@lgs.lk',
    products: 23,
    reliability: 85,
    onTime: 80,
    status: 'Active',
  },
  {
    id: '4',
    name: 'XYZ Suppliers',
    company: 'XYZ Imports',
    contact: 'Nimal Silva',
    phone: '+94 72 222 3333',
    email: 'nimal@xyz.lk',
    products: 12,
    reliability: 65,
    onTime: 60,
    status: 'Inactive',
  },
];

export default function Suppliers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<'dashboard' | 'list'>('dashboard');

  const handleKpiClick = (status: string) => {
    setStatusFilter(status);
    setActiveView('list');
  };

  // Filter logic
  const filteredSuppliers = mockSuppliers.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.contact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-background text-on-surface font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <InventoryHeader>
          <div className="relative w-full max-w-xl min-w-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
            <input
              type="text"
              placeholder="Search supplier name or contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-outline-variant bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </InventoryHeader>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-background">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-on-surface">Supplier Management</h1>
                <p className="text-sm text-outline mt-1">Manage supplier relationships, monitor performance, and support replenishment.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 border border-outline-variant rounded-lg text-sm font-medium text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export
                </button>
                <button onClick={() => setIsAddModalOpen(true)} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Add Supplier
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div 
                onClick={() => handleKpiClick('All')}
                className={`bg-surface-container-lowest p-5 rounded-xl border shadow-sm flex flex-col gap-2 cursor-pointer transition-colors ${statusFilter === 'All' && activeView === 'list' ? 'border-primary ring-1 ring-primary' : 'border-outline-variant hover:border-primary/50'}`}
              >
                <div className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined">group</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Total Suppliers</span>
                </div>
                <div className="text-3xl font-extrabold text-on-surface">{mockSuppliers.length}</div>
              </div>
              <div 
                onClick={() => handleKpiClick('Active')}
                className={`bg-surface-container-lowest p-5 rounded-xl border shadow-sm flex flex-col gap-2 cursor-pointer transition-colors ${statusFilter === 'Active' && activeView === 'list' ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-outline-variant hover:border-emerald-500/50'}`}
              >
                <div className="flex items-center gap-2 text-emerald-600">
                  <span className="material-symbols-outlined">verified_user</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Active Suppliers</span>
                </div>
                <div className="text-3xl font-extrabold text-on-surface">{mockSuppliers.filter(s => s.status === 'Active').length}</div>
              </div>
              <div 
                onClick={() => handleKpiClick('Inactive')}
                className={`bg-surface-container-lowest p-5 rounded-xl border shadow-sm flex flex-col gap-2 cursor-pointer transition-colors ${statusFilter === 'Inactive' && activeView === 'list' ? 'border-outline ring-1 ring-outline' : 'border-outline-variant hover:border-outline/50'}`}
              >
                <div className="flex items-center gap-2 text-outline-variant">
                  <span className="material-symbols-outlined">person_off</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Inactive Suppliers</span>
                </div>
                <div className="text-3xl font-extrabold text-on-surface">{mockSuppliers.filter(s => s.status === 'Inactive').length}</div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">emoji_events</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Top Performing</span>
                </div>
                <div className="text-lg font-bold text-on-surface truncate">ABC Distributors</div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <span className="material-symbols-outlined">analytics</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Avg Reliability</span>
                </div>
                <div className="text-3xl font-extrabold text-on-surface">92%</div>
              </div>
            </div>

            {/* Smart Insights & Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Performance Section */}
              <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">leaderboard</span>
                  Supplier Performance Rankings
                </h3>
                <div className="space-y-4">
                  {[ 
                    { name: 'ABC Distributors', score: 96, label: 'Excellent' },
                    { name: 'Fresh Foods Ltd', score: 92, label: 'Good' },
                    { name: 'Lanka Grocery Suppliers', score: 85, label: 'Average' }
                  ].map((sup, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-background rounded-lg border border-outline-variant">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold">{idx + 1}</div>
                        <div>
                          <p className="font-semibold text-sm text-on-surface">{sup.name}</p>
                          <p className="text-xs text-outline">{sup.label} Performance</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-on-surface">{sup.score}%</p>
                        <p className="text-xs text-outline">Reliability</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-amber-500">lightbulb</span>
                  Smart Insights
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[20px] mt-0.5">info</span>
                    <p className="text-sm text-blue-900 font-medium"><strong>ABC Distributors</strong> has the highest reliability score.</p>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-500 text-[20px] mt-0.5">local_shipping</span>
                    <p className="text-sm text-emerald-900 font-medium"><strong>Fresh Foods Ltd</strong> provides the fastest deliveries.</p>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500 text-[20px] mt-0.5">warning</span>
                    <p className="text-sm text-red-900 font-medium"><strong>XYZ Suppliers</strong> have experienced multiple delivery delays.</p>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-600 text-[20px] mt-0.5">recommend</span>
                    <p className="text-sm text-amber-900 font-medium">Consider using <strong>ABC Distributors</strong> for urgent replenishment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* List & Filters */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-outline-variant flex flex-wrap items-center gap-4 bg-background">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Status:</span>
                  <select 
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="border border-outline-variant rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary bg-surface-container-lowest"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Performance:</span>
                  <select className="border border-outline-variant rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary bg-surface-container-lowest">
                    <option>All Stats</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                  </select>
                </div>
                <div className="ml-auto">
                  <button onClick={() => { setSearchTerm(''); setStatusFilter('All'); }} className="text-sm font-medium text-primary hover:underline">Reset Filters</button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-background text-outline text-xs font-bold uppercase tracking-wider border-b border-outline-variant">
                    <tr>
                      <th className="px-6 py-4">Supplier</th>
                      <th className="px-6 py-4">Contact Person</th>
                      <th className="px-6 py-4">Contact Info</th>
                      <th className="px-6 py-4 text-center">Products</th>
                      <th className="px-6 py-4 text-center">Reliability</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {filteredSuppliers.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-outline">
                          No Suppliers Found matching your criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredSuppliers.map((s) => (
                        <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-3">
                            <div className="font-semibold text-on-surface">{s.name}</div>
                            <div className="text-xs text-outline">{s.company}</div>
                          </td>
                          <td className="px-6 py-3 font-medium text-on-surface-variant">{s.contact}</td>
                          <td className="px-6 py-3">
                            <div className="text-on-surface-variant">{s.phone}</div>
                            <div className="text-xs text-outline">{s.email}</div>
                          </td>
                          <td className="px-6 py-3 text-center font-bold text-on-surface">{s.products}</td>
                          <td className="px-6 py-3">
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${s.reliability > 90 ? 'bg-emerald-500' : s.reliability > 80 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${s.reliability}%` }} />
                              </div>
                              <span className="text-[10px] font-bold text-outline">{s.reliability}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-3 text-center">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${s.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'}`}>
                              {s.status}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Create PO">
                                <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                              </button>
                              <button className="p-1.5 text-primary hover:bg-secondary-container rounded transition-colors">
                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                              </button>
                              <button className="p-1.5 text-outline hover:text-on-surface rounded transition-colors">
                                <span className="material-symbols-outlined text-[18px]">edit</span>
                              </button>
                              <button className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Add Supplier Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-outline-variant">
              <h2 className="text-xl font-bold text-on-surface">Add New Supplier</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-outline hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-on-surface">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Supplier Name *</label>
                    <input type="text" className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm" placeholder="e.g. ABC Distributors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Company Name</label>
                    <input type="text" className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm" placeholder="e.g. ABC Logistics Ltd" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Contact Person *</label>
                    <input type="text" className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm" placeholder="e.g. John Doe" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-on-surface">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Phone Number *</label>
                    <input type="tel" className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm" placeholder="+94 77 123 4567" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Email Address</label>
                    <input type="email" className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm" placeholder="supplier@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Address</label>
                    <textarea className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm resize-none" rows={2} placeholder="Physical address"></textarea>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-on-surface">Business & Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Tax Number</label>
                    <input type="text" className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm" placeholder="Optional" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">Status</label>
                    <select className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none focus:border-primary text-sm bg-background">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-outline-variant flex justify-end gap-3 bg-background">
              <button onClick={() => setIsAddModalOpen(false)} className="px-5 py-2.5 text-sm font-medium border border-outline-variant rounded-lg hover:bg-surface-container transition-colors text-on-surface">Cancel</button>
              <button onClick={() => setIsAddModalOpen(false)} className="px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm">Save Supplier</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
