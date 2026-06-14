import api from './api';

export const authService = {
  // Traditional email/password registration
  async register(userData) {
    try {
      const response = await api.post('/auth/register', {
        email: userData.email,
        password: userData.password,
        firstName: userData.fullName.split(' ')[0] || '',
        lastName: userData.fullName.split(' ').slice(1).join(' ') || '',
        subscribeNewsletter: userData.subscribeNewsletter
      });
      
      if (response.token) {
        api.setToken(response.token);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      return response;
    } catch (error) {
      console.error('Register API Error:', error);
      throw error;
    }
  },

  // Traditional email/password login
  async login(email, password, rememberMe) {
    try {
      const response = await api.post('/auth/login', { email, password });
      
      if (response.token) {
        api.setToken(response.token);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(response.user));
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }
      }
      
      return response;
    } catch (error) {
      console.error('Login API Error:', error);
      throw error;
    }
  },

  // Get Google OAuth URL
  getGoogleAuthUrl() {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
    return `${apiUrl}/auth/google`;
  },

  // Handle Google OAuth callback
  async handleGoogleCallback(token) {
    if (token) {
      api.setToken(token);
      localStorage.setItem('isAuthenticated', 'true');
      
      // Fetch user details
      const userResponse = await api.get('/auth/me');
      if (userResponse.user) {
        localStorage.setItem('user', JSON.stringify(userResponse.user));
      }
      
      return userResponse.user;
    }
    throw new Error('No token provided');
  },

  // Forgot password - send reset link
  async forgotPassword(email) {
    return api.post('/auth/forgot-password', { email });
  },

  // Reset password with token
  async resetPassword(token, newPassword) {
    return api.post('/auth/reset-password', { token, newPassword });
  },

  // Get current logged in user
  async getCurrentUser() {
    try {
      const response = await api.get('/auth/me');
      return response.user;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  },

  // Logout
  async logout() {
    try {
      await api.post('/auth/logout', {});
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      api.setToken(null);
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      localStorage.removeItem('rememberMe');
    }
  },

  // Check if user is authenticated
  isAuthenticated() {
    const token = api.getToken();
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    return !!(token && isAuth);
  },

  // Get stored user
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};

export default authService;