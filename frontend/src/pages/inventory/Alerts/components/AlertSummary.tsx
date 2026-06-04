import React from 'react';
import { Tab, AlertSeverity } from '../types/alertTypes';

interface AlertSummaryProps {
  totalAlerts: number;
  criticalAlerts: number;
  lowStockAlerts: number;
  expiryAlerts: number;
  deadStockAlerts: number;
  reorderSuggestions: number;
  smartInsights: string[];
  setActiveTab: (t: Tab) => void;
  setSevFilter: (s: AlertSeverity | 'All') => void;
}

export default function AlertSummary({
  totalAlerts,
  criticalAlerts,
  lowStockAlerts,
  expiryAlerts,
  deadStockAlerts,
  reorderSuggestions,
  smartInsights,
  setActiveTab,
  setSevFilter,
}: AlertSummaryProps) {
  return (
    <>
      {/* Alert KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          onClick={() => { setActiveTab('All Alerts'); setSevFilter('All'); }}
          className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-slate-400 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">notifications</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total</p>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800">{totalAlerts}</h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Active alerts</p>
        </div>

        <div
          onClick={() => { setActiveTab('All Alerts'); setSevFilter('Critical'); }}
          className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-red-400 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-red-500 text-[18px]">crisis_alert</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Critical</p>
          </div>
          <h3 className="text-2xl font-extrabold text-red-600">{criticalAlerts}</h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Need immediate action</p>
        </div>

        <div
          onClick={() => { setActiveTab('Low Stock'); setSevFilter('All'); }}
          className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-amber-400 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-amber-500 text-[18px]">warning</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Low Stock</p>
          </div>
          <h3 className="text-2xl font-extrabold text-amber-600">{lowStockAlerts}</h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Below reorder threshold</p>
        </div>

        <div
          onClick={() => { setActiveTab('Expiring Soon'); setSevFilter('All'); }}
          className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-orange-400 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-orange-500 text-[18px]">alarm</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Expiring</p>
          </div>
          <h3 className="text-2xl font-extrabold text-orange-600">{expiryAlerts}</h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Within 90 days</p>
        </div>

        <div
          onClick={() => { setActiveTab('Dead Stock'); setSevFilter('All'); }}
          className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-purple-400 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-purple-500 text-[18px]">inventory_2</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Dead Stock</p>
          </div>
          <h3 className="text-2xl font-extrabold text-purple-600">{deadStockAlerts}</h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Stagnant inventory</p>
        </div>

        <div
          onClick={() => { setActiveTab('Reorder Recommendation'); setSevFilter('All'); }}
          className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-[#0b8252] hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#0b8252] text-[18px]">add_shopping_cart</span>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Reorder</p>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0b8252]">{reorderSuggestions}</h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Suggestions</p>
        </div>
      </div>

      {/* Smart Insights — Live from product data */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#eef8f2] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#0b8252] text-[18px]">auto_awesome</span>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Smart Insights</h3>
            <p className="text-[10px] text-slate-400 font-medium">Auto-generated from live inventory data</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {smartInsights.map((insight, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0b8252] text-[16px] mt-0.5 shrink-0">
                {i === 0 ? 'info' : i === 1 ? 'schedule' : 'lightbulb'}
              </span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
