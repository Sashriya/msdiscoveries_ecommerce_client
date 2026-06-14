import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) { setError('Email is required'); return; }
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <AuthLayout title="Check Your Email" subtitle="We've sent you instructions to reset your password">
                <div className="text-center"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><p className="text-gray-600">We've sent a password reset link to <strong>{email}</strong></p><Link to="/login" className="inline-block mt-6 text-black underline">Back to Sign In</Link></div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout title="Reset Password" subtitle="Enter your email to receive a reset link">
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>}
                <div><label className="block text-sm font-medium mb-1">Email Address</label><input type="email" className="w-full border rounded px-4 py-2" value={email} onChange={e => setEmail(e.target.value)} required /></div>
                <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Send Reset Link</button>
                <p className="text-center text-sm"><Link to="/login" className="text-black underline">Back to Sign In</Link></p>
            </form>
        </AuthLayout>
    );
};

export default ForgotPasswordPage;
