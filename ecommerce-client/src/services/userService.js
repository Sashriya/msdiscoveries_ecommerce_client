import api from './api';

export const userService = {
  async getProfile() {
    return api.get('/users/profile');
  },

  async updateProfile(userData) {
    return api.put('/users/profile', userData);
  },

  async getAddresses() {
    return api.get('/users/addresses');
  },

  async addAddress(address) {
    return api.post('/users/addresses', address);
  },

  async updateAddress(addressId, address) {
    return api.put(`/users/addresses/${addressId}`, address);
  },

  async deleteAddress(addressId) {
    return api.delete(`/users/addresses/${addressId}`);
  },

  async getWishlist() {
    return api.get('/users/wishlist');
  },

  async addToWishlist(productId) {
    return api.post('/users/wishlist', { productId });
  },

  async removeFromWishlist(productId) {
    return api.delete(`/users/wishlist/${productId}`);
  }
};

export default userService;