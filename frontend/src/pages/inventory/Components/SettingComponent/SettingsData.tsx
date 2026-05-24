import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsData() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Data Management</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Automated Cloud Backups</h4>
            <p className="text-sm text-slate-500 mt-0.5">Sync inventory data to secure cloud storage daily</p>
          </div>
          <Toggle active={true} />
        </div>
      </div>
    </div>
  );
}
