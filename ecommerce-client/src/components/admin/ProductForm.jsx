import React, { useState } from 'react';

const ProductForm = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState(product || {
    name: '', price: '', category: '', stock: '', description: '', images: [], status: 'active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-light mb-4">{product ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Product Name</label><input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div>
          <div className="grid grid-cols-2 gap-4"><div><label>Price</label><input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div><div><label>Stock</label><input type="number" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div></div>
          <div className="grid grid-cols-2 gap-4"><div><label>Category</label><select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="">Select</option><option value="Men">Men</option><option value="Women">Women</option><option value="Accessories">Accessories</option></select></div><div><label>Status</label><select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="active">Active</option><option value="inactive">Inactive</option></select></div></div>
          <div><label>Description</label><textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows="4" className="w-full px-4 py-2 border rounded-lg"></textarea></div>
          <div className="flex gap-3 pt-4"><button type="submit" className="flex-1 bg-black text-white py-2 rounded-lg">Save Product</button><button type="button" onClick={onClose} className="flex-1 border py-2 rounded-lg">Cancel</button></div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;