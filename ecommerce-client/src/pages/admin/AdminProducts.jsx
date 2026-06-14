import React, { useState } from 'react';
import ProductForm from '../../components/admin/ProductForm';

const AdminProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Classic Denim Jacket', price: 89.99, category: 'Men', stock: 45, status: 'active' },
    { id: 2, name: 'Slim Fit Chinos', price: 59.99, category: 'Men', stock: 32, status: 'active' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (id) => { if (window.confirm('Are you sure?')) setProducts(products.filter(p => p.id !== id)); };

  return (
    <div><div className="flex justify-between items-center mb-6"><h1 className="text-3xl font-light">Products</h1><button onClick={() => { setEditingProduct(null); setShowForm(true); }} className="px-4 py-2 bg-black text-white rounded-lg">+ Add Product</button></div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left">Product</th><th className="px-6 py-3 text-left">Price</th><th className="px-6 py-3 text-left">Category</th><th className="px-6 py-3 text-left">Stock</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Actions</th></tr></thead>
        <tbody>{products.map(product => (<tr key={product.id} className="border-b"><td className="px-6 py-4">{product.name}</td><td className="px-6 py-4">${product.price}</td><td className="px-6 py-4">{product.category}</td><td className="px-6 py-4">{product.stock}</td><td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded-full ${product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{product.status}</span></td><td className="px-6 py-4"><button onClick={() => { setEditingProduct(product); setShowForm(true); }} className="text-blue-600 mr-3">Edit</button><button onClick={() => handleDelete(product.id)} className="text-red-600">Delete</button></td></tr>))}</tbody></table>
      </div>
      {showForm && <ProductForm product={editingProduct} onClose={() => setShowForm(false)} onSave={(product) => { if (editingProduct) { setProducts(products.map(p => p.id === product.id ? product : p)); } else { setProducts([...products, { ...product, id: Date.now() }]); } setShowForm(false); }} />}
    </div>
  );
};

export default AdminProducts;