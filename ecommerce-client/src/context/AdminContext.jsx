import React, { createContext, useState, useEffect, useContext } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [dashboardStats, setDashboardStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    totalProducts: 0,
    pendingOrders: 0,
    lowStock: 0
  });

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
    if (adminStatus) {
      loadDashboardStats();
    }
  }, []);

  const loadDashboardStats = () => {
    const orders = JSON.parse(localStorage.getItem('thekour_orders') || '[]');
    const products = JSON.parse(localStorage.getItem('thekour_products') || '[]');
    const customers = JSON.parse(localStorage.getItem('thekour_customers') || '[]');
    
    setDashboardStats({
      totalOrders: orders.length,
      totalRevenue: orders.reduce((sum, o) => sum + (o.total || 0), 0),
      totalCustomers: customers.length,
      totalProducts: products.length,
      pendingOrders: orders.filter(o => o.status === 'pending').length,
      lowStock: products.filter(p => p.stock < 10).length
    });
  };

  const adminLogin = (email, password) => {
    if (email === 'admin@thekour.com' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      setIsAdmin(true);
      loadDashboardStats();
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
    setAdminData(null);
  };

  return (
    <AdminContext.Provider value={{
      isAdmin,
      adminData,
      dashboardStats,
      adminLogin,
      adminLogout,
      loadDashboardStats
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;