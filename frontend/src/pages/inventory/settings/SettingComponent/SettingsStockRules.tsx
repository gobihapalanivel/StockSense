import React from 'react';
import { StockRulesConfig } from "./types";
import { Toggle } from './Toggle';

interface Props {
  rules: StockRulesConfig;
  onChange: (updated: StockRulesConfig) => void;
}

export default function SettingsStockRules({ rules, onChange }: Props) {
  const updateField = (field: keyof StockRulesConfig, value: any) => {
    onChange({
      ...rules,
      [field]: value
    });
  };

  const handlePercentChange = (field: keyof StockRulesConfig, val: string) => {
    const cleaned = val.replace(/\D/g, '');
    if (!cleaned) {
      updateField(field, '');
      return;
    }
    const num = parseInt(cleaned, 10);
    if (num >= 0 && num <= 100) {
      updateField(field, String(num));
    }
  };

  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      <div className="flex items-center gap-2 mb-8">
        <span className="material-symbols-outlined text-[#0b8252] text-[24px]">rule</span>
        <h2 className="text-xl font-bold text-slate-800">Stock Rules (Percentage-Based)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
        
        {/* Reorder Level */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-[#0b8252]">notifications_active</span>
            Default Reorder Level (%)
          </label>
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={rules.defaultReorderLevel} 
              onChange={(e) => handlePercentChange('defaultReorderLevel', e.target.value)}
              placeholder="25"
              className="w-full pr-10 pl-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0b8252]/20 focus:border-[#0b8252] transition-all" 
            />
            <span className="absolute right-3.5 text-xs font-bold text-[#0b8252] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/60 select-none">%</span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Reorders item when stock falls below this percentage of its capacity.</p>
        </div>

        {/* Minimum Stock */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-[#0b8252]">warning</span>
            Minimum Stock Threshold (%)
          </label>
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={rules.minimumStockThreshold} 
              onChange={(e) => handlePercentChange('minimumStockThreshold', e.target.value)}
              placeholder="10"
              className="w-full pr-10 pl-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0b8252]/20 focus:border-[#0b8252] transition-all" 
            />
            <span className="absolute right-3.5 text-xs font-bold text-[#0b8252] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/60 select-none">%</span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Triggers high-priority alerts when stock falls below this safety margin.</p>
        </div>

        {/* Maximum Stock */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-[#0b8252]">gavel</span>
            Maximum Stock Limit (%)
          </label>
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={rules.maximumStockLimit} 
              onChange={(e) => handlePercentChange('maximumStockLimit', e.target.value)}
              placeholder="100"
              className="w-full pr-10 pl-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0b8252]/20 focus:border-[#0b8252] transition-all" 
            />
            <span className="absolute right-3.5 text-xs font-bold text-[#0b8252] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/60 select-none">%</span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Upper ceiling capacity percentage to prevent warehouse overstocking.</p>
        </div>

        {/* Update Mode */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-[#0b8252]">sync</span>
            Stock Update Mode
          </label>
          <div className="relative">
            <select 
              value={rules.stockUpdateMode}
              onChange={(e) => updateField('stockUpdateMode', e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-sm rounded-xl pl-3.5 pr-10 py-2.5 focus:outline-none focus:border-[#0b8252] focus:ring-2 focus:ring-[#0b8252]/20 transition-all cursor-pointer font-medium text-slate-800"
            >
              <option>Real-time</option>
              <option>Batch</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[18px]">expand_more</span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Real-time subtracts units instantly on transaction checkout.</p>
        </div>
      </div>

      <div className="space-y-6 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-[#0b8252]">settings_suggest</span>
          POS Checkout Rules
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Allow Negative Stock</h4>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Permit cashiers to scan and sell grocery items even if computer stock count is zero.</p>
          </div>
          <div className="cursor-pointer" onClick={() => updateField('allowNegativeStock', !rules.allowNegativeStock)}>
            <Toggle active={rules.allowNegativeStock} />
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Auto Deduct Stock</h4>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Automatically update inventory levels on the database upon receipt generation.</p>
          </div>
          <div className="cursor-pointer" onClick={() => updateField('autoDeductStock', !rules.autoDeductStock)}>
            <Toggle active={rules.autoDeductStock} />
          </div>
        </div>
      </div>
    </div>
  );
}
