import React, { useState } from 'react';

export default function SettingsAccount() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Show/Hide password states
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [saved, setSaved] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ newPassword?: string; confirmPassword?: string }>({});

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const newErrors: { newPassword?: string; confirmPassword?: string } = {};

    // Password Length check
    if (newPassword.length < 6) {
      newErrors.newPassword = 'New password must be at least 6 characters.';
    }

    // Passwords Match check
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setErrorMsg('Please resolve the errors below.');
      return;
    }

    setErrors({});
    setErrorMsg(null);
    setSaved(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    
    // Hide passwords after resetting
    setShowCurrent(false);
    setShowNew(false);
    setShowConfirm(false);

    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowCurrent(false);
    setShowNew(false);
    setShowConfirm(false);
    setErrorMsg(null);
    setErrors({});
  };

  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Account Settings</h2>
          <p className="text-sm text-slate-500 mt-1">Configure your login credentials and security preferences.</p>
        </div>
        {saved && (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold animate-pulse flex-shrink-0">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Password updated successfully!
          </span>
        )}
      </div>

      {/* Error Alert Banner */}
      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-sm text-red-600 font-semibold animate-in fade-in slide-in-from-top-2 duration-200">
          <span className="material-symbols-outlined text-[20px] text-red-500 flex-shrink-0">error</span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Security Form */}
      <form onSubmit={handlePasswordChange} className="space-y-6 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-[#0b8252]">lock</span>
          Security & Password
        </h3>

        {/* Current Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-[#0b8252]">lock_open</span>
            Current Password
          </label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">lock_open</span>
            <input
              type={showCurrent ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              required
              className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0b8252]/20 focus:border-[#0b8252] transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-3 text-slate-400 hover:text-slate-600 flex items-center justify-center p-1 focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showCurrent ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        {/* Password Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* New Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#0b8252]">lock</span>
              New Password
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">lock</span>
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
                className={`w-full pl-10 pr-12 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.newPassword
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-slate-200 focus:ring-[#0b8252]/20 focus:border-[#0b8252]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 text-slate-400 hover:text-slate-600 flex items-center justify-center p-1 focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showNew ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-xs text-red-500 font-semibold mt-1">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#0b8252]">enhanced_encryption</span>
              Confirm New Password
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">enhanced_encryption</span>
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                required
                className={`w-full pl-10 pr-12 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.confirmPassword
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-slate-200 focus:ring-[#0b8252]/20 focus:border-[#0b8252]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 text-slate-400 hover:text-slate-600 flex items-center justify-center p-1 focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showConfirm ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 font-semibold mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-5 border-t border-slate-100 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold text-sm rounded-xl shadow-sm hover:bg-slate-50 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">restart_alt</span>
            Reset
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 bg-gradient-to-r from-[#0b8252] to-[#0a7048] hover:from-[#096b43] hover:to-[#085e3a] text-white font-bold text-sm rounded-xl shadow-sm active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">lock_reset</span>
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}
