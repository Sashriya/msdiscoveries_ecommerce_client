import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); console.log(formData); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); setFormData({ name: '', email: '', subject: '', message: '' }); };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg text-center"><div className="text-3xl mb-2">📞</div><h3 className="font-semibold mb-1">Phone</h3><p className="text-gray-600">+1 (555) 123-4567</p></div>
          <div className="bg-white p-6 rounded-lg text-center"><div className="text-3xl mb-2">✉️</div><h3 className="font-semibold mb-1">Email</h3><p className="text-gray-600">support@thekour.com</p></div>
          <div className="bg-white p-6 rounded-lg text-center"><div className="text-3xl mb-2">📍</div><h3 className="font-semibold mb-1">Address</h3><p className="text-gray-600">123 Fashion Ave, NYC</p></div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-sm">{submitted && <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">Thank you! We'll get back to you soon.</div>}<form onSubmit={handleSubmit} className="space-y-4"><input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /><input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /><input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /><textarea placeholder="Message" rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required></textarea><button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">Send Message</button></form></div>
      </div>
    </div>
  );
};
export default ContactPage;
