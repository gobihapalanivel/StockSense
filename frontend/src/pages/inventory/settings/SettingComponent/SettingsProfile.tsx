import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import defaultAvatar from '@/assets/images/default-avatar.png';

export default function SettingsProfile() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('stocksense_profile_settings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.fullName) setFullName(parsed.fullName);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.phone) setPhone(parsed.phone);
        if (parsed.customAvatar) setCustomAvatar(parsed.customAvatar);
      } catch (e) {
        // Fallback to default
      }
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const newErrors: typeof errors = {};

    // Name Validation
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Phone Validation (must be exactly 10 digits if provided)
    if (phone && phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setErrorMsg('Please resolve validation errors.');
      return;
    }

    setErrors({});
    localStorage.setItem('stocksense_profile_settings', JSON.stringify({ fullName, email, phone, customAvatar }));
    setSaved(true);
    // Dispatch global event for header synchronization
    window.dispatchEvent(new Event('stocksense_profile_updated'));
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setErrors({});
    setErrorMsg(null);
    const stored = localStorage.getItem('stocksense_profile_settings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFullName(parsed.fullName || user?.name || '');
        setEmail(parsed.email || user?.email || '');
        setPhone(parsed.phone || '');
        setCustomAvatar(parsed.customAvatar || null);
      } catch (e) {
        setFullName(user?.name || '');
        setEmail(user?.email || '');
        setPhone('');
        setCustomAvatar(null);
      }
    } else {
      setFullName(user?.name || '');
      setEmail(user?.email || '');
      setPhone('');
      setCustomAvatar(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1.5 * 1024 * 1024) {
        setErrorMsg('Image size must be less than 1.5MB.');
        setTimeout(() => setErrorMsg(null), 4000);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setCustomAvatar(null);
  };

  const avatarUrl = defaultAvatar;

  return (
    <div className="max-w-2xl animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800">My Profile</h2>
          <p className="text-sm text-slate-500 mt-1">Manage your personal details and public profile info.</p>
        </div>
        {saved && (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold animate-pulse">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Changes saved successfully!
          </span>
        )}
        {errorMsg && (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold animate-pulse">
            <span className="material-symbols-outlined text-[14px]">error</span>
            {errorMsg}
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Avatar Upload Preview */}
        <div className="flex items-center gap-6 p-5 rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50/80 to-white shadow-sm">
          <div className="relative group">
            <img
              src={customAvatar || avatarUrl}
              alt="Profile Avatar"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover bg-white ring-2 ring-[#0b8252]/20 group-hover:ring-[#0b8252]/40 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
              <span className="material-symbols-outlined text-white text-[22px]">photo_camera</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Profile Picture</h4>
            <p className="text-xs text-slate-400 mt-1">Upload a custom photo. Max size of 1.5MB.</p>
            <div className="flex items-center gap-2 mt-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3.5 py-1.5 bg-[#0b8252] text-white font-bold text-[11px] rounded-lg shadow-sm hover:bg-[#096b43] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">upload</span>
                Upload Image
              </button>
              {customAvatar && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="px-3.5 py-1.5 bg-red-50 border border-red-100 text-red-600 font-bold text-[11px] rounded-lg hover:bg-red-100/50 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">delete</span>
                  Remove
                </button>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#0b8252]">person</span>
              Full Name
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">person</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.fullName
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-slate-200 focus:ring-[#0b8252]/20 focus:border-[#0b8252]'
                }`}
                required
              />
            </div>
            {errors.fullName && <p className="text-xs text-red-500 font-semibold mt-1">{errors.fullName}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#0b8252]">mail</span>
              Email Address
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">mail</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-slate-200 focus:ring-[#0b8252]/20 focus:border-[#0b8252]'
                }`}
                required
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 font-semibold mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#0b8252]">call</span>
              Phone Number
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">call</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="e.g. 9876543210"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.phone
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
                    : 'border-slate-200 focus:ring-[#0b8252]/20 focus:border-[#0b8252]'
                }`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 font-semibold mt-1">{errors.phone}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#0b8252]">shield_person</span>
              Account Role
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">shield_person</span>
              <input
                type="text"
                value={user?.role || 'INVENTORY_MANAGER'}
                disabled
                className="w-full pl-10 pr-24 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-500 text-sm cursor-not-allowed font-medium"
              />
              <span className="absolute right-3.5 text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Verified
              </span>
            </div>
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
            <span className="material-symbols-outlined text-[16px]">save</span>
            Save Profile Settings
          </button>
        </div>
      </form>
    </div>
  );
}
