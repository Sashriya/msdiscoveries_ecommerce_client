import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '', 
        confirmPassword: '',
        profilePicture: null,
        profilePicturePreview: null
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                setError('Profile picture must be less than 2MB');
                return;
            }
            // Check file type
            if (!file.type.startsWith('image/')) {
                setError('Please upload an image file');
                return;
            }
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    profilePicture: file,
                    profilePicturePreview: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validation
        if (!formData.firstName) {
            setError('First name is required');
            return;
        }
        if (!formData.lastName) {
            setError('Last name is required');
            return;
        }
        if (!formData.email) {
            setError('Email is required');
            return;
        }
        if (!formData.email.includes('@') || !formData.email.includes('.')) {
            setError('Please enter a valid email address');
            return;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        setLoading(true);
        
        // Simulate API call with form data (including profile picture)
        setTimeout(() => {
            // Create user object with all details
            const userData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                fullName: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                profilePicture: formData.profilePicturePreview || null,
                registeredAt: new Date().toISOString()
            };
            
            // Store user data in localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', formData.email);
            localStorage.setItem('userName', `${formData.firstName} ${formData.lastName}`);
            localStorage.setItem('userFirstName', formData.firstName);
            localStorage.setItem('userLastName', formData.lastName);
            localStorage.setItem('userProfilePicture', formData.profilePicturePreview || '');
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Check for redirect after login
            const redirectAfter = localStorage.getItem('redirectAfterLogin');
            if (redirectAfter) {
                localStorage.removeItem('redirectAfterLogin');
                navigate(redirectAfter);
            } else {
                navigate('/');
            }
            setLoading(false);
        }, 1000);
    };

    const handleGoogleSignIn = () => {
        setLoading(true);
        // Simulate Google Sign-In
        setTimeout(() => {
            const googleUserData = {
                firstName: 'Google',
                lastName: 'User',
                fullName: 'Google User',
                email: 'google.user@gmail.com',
                profilePicture: 'https://ui-avatars.com/api/?name=Google+User&background=000&color=fff&rounded=true&size=128',
                registeredAt: new Date().toISOString()
            };
            
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', googleUserData.email);
            localStorage.setItem('userName', googleUserData.fullName);
            localStorage.setItem('userFirstName', googleUserData.firstName);
            localStorage.setItem('userLastName', googleUserData.lastName);
            localStorage.setItem('userProfilePicture', googleUserData.profilePicture);
            localStorage.setItem('userData', JSON.stringify(googleUserData));
            
            const redirectAfter = localStorage.getItem('redirectAfterLogin');
            if (redirectAfter) {
                localStorage.removeItem('redirectAfterLogin');
                navigate(redirectAfter);
            } else {
                navigate('/');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <AuthLayout title="Create Account" subtitle="Join THEKOUR today">
            <form onSubmit={handleSubmit} className="space-y-5">
                {error && <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>}
                
                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center mb-4">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200">
                            {formData.profilePicturePreview ? (
                                <img 
                                    src={formData.profilePicturePreview} 
                                    alt="Profile Preview" 
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <label className="absolute bottom-0 right-0 bg-black text-white rounded-full p-1 cursor-pointer hover:bg-gray-800 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*"
                                onChange={handleProfilePictureChange}
                            />
                        </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Upload profile picture (optional)</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input 
                            type="text" 
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-black" 
                            value={formData.firstName} 
                            onChange={e => setFormData({...formData, firstName: e.target.value})} 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input 
                            type="text" 
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-black" 
                            value={formData.lastName} 
                            onChange={e => setFormData({...formData, lastName: e.target.value})} 
                            required 
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                        type="email" 
                        className="w-full border rounded px-4 py-2 focus:outline-none focus:border-black" 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        required 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium mb-1">Create Password</label>
                    <input 
                        type="password" 
                        className="w-full border rounded px-4 py-2 focus:outline-none focus:border-black" 
                        value={formData.password} 
                        onChange={e => setFormData({...formData, password: e.target.value})} 
                        required 
                    />
                    <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
                </div>
                
                <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input 
                        type="password" 
                        className="w-full border rounded px-4 py-2 focus:outline-none focus:border-black" 
                        value={formData.confirmPassword} 
                        onChange={e => setFormData({...formData, confirmPassword: e.target.value})} 
                        required 
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
                >
                    {loading ? 'Creating account...' : 'Create Account'}
                </button>
                
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>
                
                <button 
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>Sign up with Google</span>
                </button>
                
                <p className="text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-black font-medium hover:underline">Sign In</Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default RegisterPage;