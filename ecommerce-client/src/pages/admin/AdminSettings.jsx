import React, { useState } from 'react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'THEKOUR', siteEmail: 'support@thekour.com', sitePhone: '+1 234 567 8900', siteAddress: '123 Fashion Street, New York',
    currency: 'USD', taxRate: 10, freeShippingThreshold: 75
  });

  const handleSave = () => { alert('Settings saved!'); };

  return (
    <div><h1 className="text-3xl font-light mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl">
        <form onSubmit={handleSave} className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Site Name</label><input type="text" value={settings.siteName} onChange={(e) => setSettings({...settings, siteName: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /></div>
          <div className="grid grid-cols-2 gap-4"><div><label>Site Email</label><input type="email" value={settings.siteEmail} onChange={(e) => setSettings({...settings, siteEmail: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /></div><div><label>Site Phone</label><input type="text" value={settings.sitePhone} onChange={(e) => setSettings({...settings, sitePhone: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /></div></div>
          <div><label>Site Address</label><input type="text" value={settings.siteAddress} onChange={(e) => setSettings({...settings, siteAddress: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /></div>
          <div className="grid grid-cols-3 gap-4"><div><label>Currency</label><select value={settings.currency} onChange={(e) => setSettings({...settings, currency: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option></select></div><div><label>Tax Rate (%)</label><input type="number" value={settings.taxRate} onChange={(e) => setSettings({...settings, taxRate: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /></div><div><label>Free Shipping Threshold ($)</label><input type="number" value={settings.freeShippingThreshold} onChange={(e) => setSettings({...settings, freeShippingThreshold: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /></div></div>
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-lg">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;