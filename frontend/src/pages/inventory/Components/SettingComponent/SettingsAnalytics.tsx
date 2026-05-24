import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsAnalytics() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Reporting Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Default time range</label>
          <input
            type="text"
            defaultValue="Month"
            className="w-full bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#0b8252] focus:ring-1 focus:ring-[#0b8252] transition-shadow"
          />
        </div>
        <div className="flex items-start justify-between mt-6 pt-6 border-t border-slate-100">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Enable auto-generated reports</h4>
            <p className="text-sm text-slate-500 mt-0.5">Automatically generate and email end-of-month inventory summaries</p>
          </div>
          <div className="mt-0.5"><Toggle active={true} /></div>
        </div>
      </div>
    </div>
  );
}
