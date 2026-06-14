import React, { useState } from 'react';
import CouponForm from '../../components/admin/CouponForm';

const AdminCoupons = () => {
  const [coupons, setCoupons] = useState([
    { id: 1, code: 'SAVE10', discount: 10, type: 'percentage', validUntil: '2024-12-31', usageLimit: 100, used: 45, status: 'active' },
  ]);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (id) => { if (window.confirm('Delete this coupon?')) setCoupons(coupons.filter(c => c.id !== id)); };
  const toggleStatus = (id) => { setCoupons(coupons.map(c => c.id === id ? { ...c, status: c.status === 'active' ? 'inactive' : 'active' } : c)); };

  return (
    <div><div className="flex justify-between items-center mb-6"><h1 className="text-3xl font-light">Coupons</h1><button onClick={() => setShowForm(true)} className="px-4 py-2 bg-black text-white rounded-lg">+ Add Coupon</button></div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left">Code</th><th className="px-6 py-3 text-left">Discount</th><th className="px-6 py-3 text-left">Valid Until</th><th className="px-6 py-3 text-left">Usage</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Actions</th></tr></thead>
        <tbody>{coupons.map(coupon => (<tr key={coupon.id} className="border-b"><td className="px-6 py-4 font-mono">{coupon.code}</td><td className="px-6 py-4">{coupon.discount}{coupon.type === 'percentage' ? '%' : '$'}</td><td className="px-6 py-4">{coupon.validUntil}</td><td className="px-6 py-4">{coupon.used}/{coupon.usageLimit}</td><td className="px-6 py-4"><button onClick={() => toggleStatus(coupon.id)} className={`px-2 py-1 text-xs rounded-full ${coupon.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{coupon.status}</button></td><td className="px-6 py-4"><button onClick={() => handleDelete(coupon.id)} className="text-red-600">Delete</button></td></tr>))}</tbody></table>
      </div>
      {showForm && <CouponForm onClose={() => setShowForm(false)} onSave={(coupon) => { setCoupons([...coupons, { ...coupon, id: Date.now(), used: 0 }]); setShowForm(false); }} />}
    </div>
  );
};

export default AdminCoupons;