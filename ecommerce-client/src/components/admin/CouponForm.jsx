import React, { useState } from 'react';

const CouponForm = ({ coupon, onClose, onSave }) => {
  const [formData, setFormData] = useState(coupon || {
    code: '', discount: '', type: 'percentage', validUntil: '', usageLimit: '', status: 'active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-light mb-4">{coupon ? 'Edit Coupon' : 'Add Coupon'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label>Coupon Code</label><input type="text" value={formData.code} onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})} className="w-full px-4 py-2 border rounded-lg" required /></div>
          <div className="grid grid-cols-2 gap-4"><div><label>Discount</label><input type="number" value={formData.discount} onChange={(e) => setFormData({...formData, discount: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div><div><label>Type</label><select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="percentage">Percentage (%)</option><option value="fixed">Fixed ($)</option></select></div></div>
          <div className="grid grid-cols-2 gap-4"><div><label>Valid Until</label><input type="date" value={formData.validUntil} onChange={(e) => setFormData({...formData, validUntil: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div><div><label>Usage Limit</label><input type="number" value={formData.usageLimit} onChange={(e) => setFormData({...formData, usageLimit: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /></div></div>
          <div className="flex gap-3 pt-4"><button type="submit" className="flex-1 bg-black text-white py-2 rounded-lg">Save Coupon</button><button type="button" onClick={onClose} className="flex-1 border py-2 rounded-lg">Cancel</button></div>
        </form>
      </div>
    </div>
  );
};

export default CouponForm;