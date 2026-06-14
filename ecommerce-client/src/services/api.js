const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    console.log(`🔗 API Base URL: ${this.baseURL}`);
  }

  getToken() {
    return localStorage.getItem('thekour_token');
  }

  setToken(token) {
    if (token) {
      localStorage.setItem('thekour_token', token);
    } else {
      localStorage.removeItem('thekour_token');
    }
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getToken();

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      ...options,
      headers,
      credentials: 'include',
    };

    try {
      console.log(`📡 API Request: ${options.method || 'GET'} ${url}`);
      
      const response = await fetch(url, config);
      
      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        if (response.status === 401) {
          this.setToken(null);
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('user');
        }
        
        const error = new Error(data.message || data || 'Something went wrong');
        error.status = response.status;
        error.data = data;
        throw error;
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      
      if (error.message === 'Failed to fetch') {
        const connectionError = new Error(`Cannot connect to server at ${this.baseURL}. Please make sure the backend is running.`);
        connectionError.isConnectionError = true;
        throw connectionError;
      }
      
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  post(endpoint, body) {
    return this.request(endpoint, { method: 'POST', body: JSON.stringify(body) });
  }

  put(endpoint, body) {
    return this.request(endpoint, { method: 'PUT', body: JSON.stringify(body) });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiService();
export default api;