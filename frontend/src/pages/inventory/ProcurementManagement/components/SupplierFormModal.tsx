import React from 'react';

interface SupplierFormModalProps {
  isOpen: boolean;
  mode: 'add' | 'edit';
  formData: {
    name: string;
    contact: string;
    phone: string;
    email: string;
    companyName: string;
    brn: string;
    taxNumber: string;
    street: string;
    city: string;
    province: string;
    categories: string;
    deliveryDays: string[];
    paymentTerms: string;
    status: 'Active' | 'Inactive';
  };
  formErrors: {
    name: string;
    contact: string;
    phone: string;
    email: string;
    companyName: string;
    brn: string;
    taxNumber: string;
    street: string;
    city: string;
    province: string;
    categories: string;
  };
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onDeliveryDayChange: (day: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SupplierFormModal({
  isOpen,
  mode,
  formData,
  formErrors,
  onClose,
  onChange,
  onDeliveryDayChange,
  onSubmit,
}: SupplierFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <form
        onSubmit={onSubmit}
        className="bg-[#f8fafc] rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] border border-outline-variant animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-outline-variant bg-surface-container-lowest">
          <h2 className="text-base font-black text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">
              {mode === 'add' ? 'person_add' : 'edit'}
            </span>
            {mode === 'add' ? 'Create Supplier Profile' : 'Edit Supplier Profile'}
          </h2>
          <button type="button" onClick={onClose} className="text-outline hover:text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column 1: General Info */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-on-surface flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                General Information
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Supplier Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                      formErrors.name ? 'border-red-500' : 'border-outline-variant'
                    }`}
                    placeholder="e.g. ABC Distributors"
                  />
                  {formErrors.name && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Contact Person *</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={onChange}
                    className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                      formErrors.contact ? 'border-red-500' : 'border-outline-variant'
                    }`}
                    placeholder="e.g. John Doe"
                  />
                  {formErrors.contact && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.contact}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={onChange}
                      className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                        formErrors.phone ? 'border-red-500' : 'border-outline-variant'
                      }`}
                      placeholder="e.g. +94 77 123 4567"
                    />
                    {formErrors.phone && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                        formErrors.email ? 'border-red-500' : 'border-outline-variant'
                      }`}
                      placeholder="e.g. info@abcdistributors.com"
                    />
                    {formErrors.email && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.email}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Business Details */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-on-surface flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="material-symbols-outlined text-primary text-[18px]">business_center</span>
                Business Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={onChange}
                    className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                      formErrors.companyName ? 'border-red-500' : 'border-outline-variant'
                    }`}
                    placeholder="e.g. ABC Holdings (Pvt) Ltd"
                  />
                  {formErrors.companyName && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.companyName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Registration Number *</label>
                    <input
                      type="text"
                      name="brn"
                      value={formData.brn}
                      onChange={onChange}
                      className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                        formErrors.brn ? 'border-red-500' : 'border-outline-variant'
                      }`}
                      placeholder="e.g. BRN-20150912"
                    />
                    {formErrors.brn && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.brn}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Tax Number *</label>
                    <input
                      type="text"
                      name="taxNumber"
                      value={formData.taxNumber}
                      onChange={onChange}
                      className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                        formErrors.taxNumber ? 'border-red-500' : 'border-outline-variant'
                      }`}
                      placeholder="e.g. TN-102934-A"
                    />
                    {formErrors.taxNumber && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.taxNumber}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Address Details */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-on-surface flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                Address Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Street Address *</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={onChange}
                    className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                      formErrors.street ? 'border-red-500' : 'border-outline-variant'
                    }`}
                    placeholder="e.g. 123 Business Street"
                  />
                  {formErrors.street && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.street}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={onChange}
                      className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                        formErrors.city ? 'border-red-500' : 'border-outline-variant'
                      }`}
                      placeholder="e.g. Colombo"
                    />
                    {formErrors.city && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Province *</label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={onChange}
                      className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                        formErrors.province ? 'border-red-500' : 'border-outline-variant'
                      }`}
                      placeholder="e.g. Western"
                    />
                    {formErrors.province && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.province}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Supply Info & Status */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-on-surface flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="material-symbols-outlined text-primary text-[18px]">local_shipping</span>
                Supply Info & Status
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Product Categories Supplied *</label>
                  <input
                    type="text"
                    name="categories"
                    value={formData.categories}
                    onChange={onChange}
                    className={`w-full border rounded-lg px-3 py-2 outline-none text-xs font-semibold focus:ring-1 focus:ring-primary ${
                      formErrors.categories ? 'border-red-500' : 'border-outline-variant'
                    }`}
                    placeholder="e.g. Grocery, Beverages, Snacks"
                  />
                  {formErrors.categories && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.categories}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Payment Terms</label>
                    <select
                      name="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={onChange}
                      className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none text-xs font-bold bg-background focus:ring-1 focus:ring-primary"
                    >
                      <option value="COD">COD (Cash on Delivery)</option>
                      <option value="Net 15">Net 15</option>
                      <option value="Net 30">Net 30</option>
                      <option value="Net 60">Net 60</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={onChange}
                      className="w-full border border-outline-variant rounded-lg px-3 py-2 outline-none text-xs font-bold bg-background focus:ring-1 focus:ring-primary"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-outline mb-1.5">Preferred Delivery Days</label>
                  <div className="grid grid-cols-4 gap-2 border border-outline-variant p-2 rounded-lg bg-background">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                      <label
                        key={day}
                        className="flex items-center gap-1.5 cursor-pointer text-[10px] font-bold text-slate-600 select-none hover:text-slate-800"
                      >
                        <input
                          type="checkbox"
                          checked={formData.deliveryDays.includes(day)}
                          onChange={() => onDeliveryDayChange(day)}
                          className="accent-primary w-3.5 h-3.5 rounded"
                        />
                        {day.slice(0, 3)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-outline-variant flex justify-end gap-3 bg-surface-container-lowest">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold border border-outline-variant rounded-lg hover:bg-surface-container transition-colors text-on-surface"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 text-xs font-bold bg-[#0b8252] hover:bg-[#096b43] text-white rounded-lg transition-colors shadow-sm"
          >
            Save Supplier
          </button>
        </div>
      </form>
    </div>
  );
}
