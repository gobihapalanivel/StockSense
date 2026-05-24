import React from 'react';
import { Toggle } from './Toggle';

export default function SettingsMovement() {
  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Movement & Adjustments</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Require approval</h4>
            <p className="text-sm text-slate-500 mt-0.5">Require manager approval for manual stock adjustments</p>
          </div>
          <Toggle active={true} />
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Allow negative stock</h4>
            <p className="text-sm text-slate-500 mt-0.5">Permit stock levels to fall below zero during adjustments</p>
          </div>
          <Toggle active={false} />
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Auto-trigger alerts</h4>
            <p className="text-sm text-slate-500 mt-0.5">Generate alerts for large discrepancy adjustments</p>
          </div>
          <Toggle active={true} />
        </div>
      </div>
    </div>
  );
}
