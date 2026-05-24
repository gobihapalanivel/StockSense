import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsReorder() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Purchase & Supplier</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Default supplier behavior</label>
          <input
            type="text"
            defaultValue="Preferred Supplier"
            className="w-full bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#0b8252] focus:ring-1 focus:ring-[#0b8252] transition-shadow"
          />
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Enable restock mapping</h4>
            <p className="text-sm text-slate-500 mt-0.5">Automatically map reorder quantities to supplier package sizes</p>
          </div>
          <Toggle active={true} />
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Auto-suggest supplier</h4>
            <p className="text-sm text-slate-500 mt-0.5">Recommend cheapest supplier for reorder generation</p>
          </div>
          <Toggle active={false} />
        </div>
      </div>
    </div>
  );
}
