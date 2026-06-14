import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (!isAuthenticated) { navigate('/login'); return; }
        setUser({ name: localStorage.getItem('userName') || 'John Doe', email: localStorage.getItem('userEmail') || 'john@example.com', phone: '+1 234 567 8900' });
        setFormData({ name: localStorage.getItem('userName') || 'John Doe', email: localStorage.getItem('userEmail') || 'john@example.com', phone: '+1 234 567 8900' });
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', formData.name);
        localStorage.setItem('userEmail', formData.email);
        setUser(formData);
        setIsEditing(false);
        alert('Profile updated!');
    };

    if (!user) return <Loader />;
    return (
        <div className="bg-gray-50 min-h-screen py-12"><div className="max-w-3xl mx-auto px-4"><h1 className="text-4xl font-light mb-8">My Profile</h1><div className="bg-white rounded-lg p-6">{!isEditing ? (<div className="space-y-4"><div className="flex justify-between pb-4 border-b"><div><p className="text-sm text-gray-500">Full Name</p><p className="font-semibold">{user.name}</p></div><button onClick={() => setIsEditing(true)} className="text-black">Edit</button></div><div className="pb-4 border-b"><p className="text-sm text-gray-500">Email</p><p className="font-semibold">{user.email}</p></div><div><p className="text-sm text-gray-500">Phone</p><p className="font-semibold">{user.phone}</p></div></div>) : (<form onSubmit={handleSubmit} className="space-y-4"><input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /><input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /><input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2 border rounded-lg" /><div className="flex gap-3"><button type="submit" className="px-6 py-2 bg-black text-white rounded-lg">Save</button><button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2 border rounded-lg">Cancel</button></div></form>)}</div></div></div>
    );
};

export default ProfilePage;
