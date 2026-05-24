import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsStockRules() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Stock Rules</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Default Reorder Level</label>
          <input type="text" defaultValue="50" className="w-full bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#0b8252] focus:ring-1 focus:ring-[#0b8252] transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Minimum Stock Threshold</label>
          <input type="text" defaultValue="20" className="w-full bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#0b8252] focus:ring-1 focus:ring-[#0b8252] transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Maximum Stock Limit</label>
          <input type="text" defaultValue="No limit" className="w-full bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#0b8252] focus:ring-1 focus:ring-[#0b8252] transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Stock Update Mode</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:border-[#0b8252] focus:ring-1 focus:ring-[#0b8252] transition-shadow cursor-pointer">
              <option>Real-time</option>
              <option>Batch</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[18px]">expand_more</span>
          </div>
        </div>
      </div>

      <div className="space-y-6 border-t border-slate-100 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Allow Negative Stock</h4>
            <p className="text-sm text-slate-500 mt-0.5">Permit sales even if inventory count is zero</p>
          </div>
          <Toggle active={false} />
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Auto Deduct Stock</h4>
            <p className="text-sm text-slate-500 mt-0.5">Automatically update inventory upon sales completion</p>
          </div>
          <Toggle active={true} />
        </div>
      </div>
    </div>
  );
}
