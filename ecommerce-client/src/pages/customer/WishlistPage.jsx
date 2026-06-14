import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('thekour_wishlist') || '[]');
        setWishlist(savedWishlist);
        setIsLoading(false);
    }, []);

    const removeFromWishlist = (id) => {
        const updated = wishlist.filter(item => item.id !== id);
        setWishlist(updated);
        localStorage.setItem('thekour_wishlist', JSON.stringify(updated));
    };

    if (isLoading) return <Loader />;
    return (
        <div className="bg-gray-50 min-h-screen py-12"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-light mb-8">My Wishlist ({wishlist.length})</h1>{wishlist.length === 0 ? (<div className="bg-white rounded-lg p-12 text-center"><svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg><p className="text-gray-500">Your wishlist is empty</p><Link to="/shop" className="inline-block mt-4 text-black underline">Continue Shopping →</Link></div>) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">{wishlist.map(item => (<div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-64 object-cover" /><div className="p-4"><h3 className="font-semibold mb-2">{item.name}</h3><p className="text-red-600 font-semibold"></p><div className="flex gap-2 mt-3"><button className="flex-1 py-2 bg-black text-white rounded-lg text-sm">Add to Cart</button><button onClick={() => removeFromWishlist(item.id)} className="px-3 py-2 border rounded-lg text-sm">Remove</button></div></div></div>))}</div>)}</div></div>
    );
};

export default WishlistPage;
