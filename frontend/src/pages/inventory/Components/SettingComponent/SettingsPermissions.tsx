import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsPermissions() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Role Permissions</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Strict Access Control</h4>
            <p className="text-sm text-slate-500 mt-0.5">Restrict inventory adjustments to Admin roles only</p>
          </div>
          <Toggle active={true} />
        </div>
      </div>
    </div>
  );
}
