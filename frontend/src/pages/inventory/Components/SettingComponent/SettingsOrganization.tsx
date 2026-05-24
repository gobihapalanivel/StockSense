import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsOrganization() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Organization Settings</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Multi-warehouse support</h4>
            <p className="text-sm text-slate-500 mt-0.5">Enable inventory tracking across multiple locations</p>
          </div>
          <Toggle active={false} />
        </div>
      </div>
    </div>
  );
}
