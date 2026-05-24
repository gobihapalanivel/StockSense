import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsAlerts() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Alert Settings</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Enable Low Stock Alerts</h4>
            <p className="text-sm text-slate-500 mt-0.5">Receive notifications when items reach minimum threshold</p>
          </div>
          <Toggle active={true} />
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Out of Stock Alerts</h4>
            <p className="text-sm text-slate-500 mt-0.5">Immediate alerts when inventory hits zero</p>
          </div>
          <Toggle active={true} />
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Dead Stock Alerts</h4>
            <p className="text-sm text-slate-500 mt-0.5">Alerts for items with no movement over specified duration</p>
          </div>
          <Toggle active={false} />
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h4 className="text-sm font-bold text-slate-800 mb-4">Notification Channels</h4>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 text-sm font-medium">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-[#0b8252] focus:ring-[#0b8252] accent-[#0b8252]" />
              In-app
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 text-sm font-medium">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-[#0b8252] focus:ring-[#0b8252] accent-[#0b8252]" />
              Email
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 text-sm font-medium">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#0b8252] focus:ring-[#0b8252] accent-[#0b8252]" />
              SMS
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
