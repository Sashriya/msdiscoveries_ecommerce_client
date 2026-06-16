import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { AdminProvider } from './context/AdminContext';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';

// Public Pages
import HomePage from './pages/public/HomePage';
import ShopPage from './pages/public/ShopPage';
import ProductDetailPage from './pages/public/ProductDetailPage';
import CartPage from './pages/public/CartPage';
import CheckoutPage from './pages/public/CheckoutPage';
import TrackOrderPage from './pages/public/TrackOrderPage';
import NewArrivalsPage from './pages/public/NewArrivalsPage';
import MensPage from './pages/public/MensPage';
import WomensPage from './pages/public/WomensPage';
import AccessoriesPage from './pages/public/AccessoriesPage';
import SalePage from './pages/public/SalePage';
import CollectionsPage from './pages/public/CollectionsPage';
import ContactPage from './pages/public/ContactPage';
import NotFoundPage from './pages/public/NotFoundPage';
import BlogPage from './pages/public/BlogPage';
import BlogPostPage from './pages/public/BlogPostPage';
import CategoryPage from './pages/public/CategoryPage';
import BestSellersPage from './pages/public/BestSellersPage';
import TrendingNowPage from './pages/public/TrendingNowPage';
import LimitedEditionPage from './pages/public/LimitedEditionPage';

// Footer Pages – About Section
import OurStoryPage from './pages/public/OurStoryPage';
import SustainabilityPage from './pages/public/SustainabilityPage';
import CareersPage from './pages/public/CareersPage';
import PressPage from './pages/public/PressPage';

// Footer Pages – Customer Service
import HelpCenterPage from './pages/public/HelpCenterPage';
import ReturnsPage from './pages/public/ReturnsPage';
import ShippingPage from './pages/public/ShippingPage';
import SizeGuidePage from './pages/public/SizeGuidePage';
import FaqPage from './pages/public/FaqPage';

// Footer Pages – Legal
import PrivacyPolicyPage from './pages/public/PrivacyPolicyPage';
import TermsPage from './pages/public/TermsPage';
import CookiePolicyPage from './pages/public/CookiePolicyPage';
import AccessibilityPage from './pages/public/AccessibilityPage';
import GdprPage from './pages/public/GdprPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import AuthCallback from './pages/auth/AuthCallback';

// Customer Pages (Protected)
import ProfilePage from './pages/customer/ProfilePage';
import MyOrdersPage from './pages/customer/MyOrdersPage';
import WishlistPage from './pages/customer/WishlistPage';
import AddressBookPage from './pages/customer/AddressBookPage';
import AccountPage from './pages/customer/AccountPage';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminCoupons from './pages/admin/AdminCoupons';
import AdminReports from './pages/admin/AdminReports';
import AdminSettings from './pages/admin/AdminSettings';

// =================== CATALOG SUB‑PAGES ===================
// Men
import TshirtsPage from './pages/public/men/TshirtsPage';
import ShirtsPage from './pages/public/men/ShirtsPage';
import JeansPage from './pages/public/men/JeansPage';
import TrousersPage from './pages/public/men/TrousersPage';
import JacketsPage from './pages/public/men/JacketsPage';
import ShoesPage from './pages/public/men/ShoesPage';
import MenAccessoriesPage from './pages/public/men/AccessoriesPage';

// Women
import DressesPage from './pages/public/women/DressesPage';
import TopsPage from './pages/public/women/TopsPage';
import SkirtsPage from './pages/public/women/SkirtsPage';
import PantsPage from './pages/public/women/PantsPage';
import WomenJacketsPage from './pages/public/women/JacketsPage';
import WomenShoesPage from './pages/public/women/ShoesPage';
import WomenAccessoriesPage from './pages/public/women/AccessoriesPage';

// Kids
import BoysPage from './pages/public/kids/BoysPage';
import GirlsPage from './pages/public/kids/GirlsPage';
import InfantsPage from './pages/public/kids/InfantsPage';
import KidsShoesPage from './pages/public/kids/ShoesPage';
import ToysPage from './pages/public/kids/ToysPage';

// Occasion Wear
import WeddingPage from './pages/public/occasion/WeddingPage';
import PartyPage from './pages/public/occasion/PartyPage';
import OfficePage from './pages/public/occasion/OfficePage';
import CasualPage from './pages/public/occasion/CasualPage';
import BeachPage from './pages/public/occasion/BeachPage';

// Collections
import SummerPage from './pages/public/collections/SummerPage';
import WinterPage from './pages/public/collections/WinterPage';
import SpringPage from './pages/public/collections/SpringPage';
import FallPage from './pages/public/collections/FallPage';
import DiwaliPage from './pages/public/collections/DiwaliPage';
import ChristmasPage from './pages/public/collections/ChristmasPage';
import EidPage from './pages/public/collections/EidPage';
import NewYearPage from './pages/public/collections/NewYearPage.jsx';
import CapsulePage from './pages/public/collections/CapsulePage';
import DesignerPage from './pages/public/collections/DesignerPage';
import SustainablePage from './pages/public/collections/SustainablePage';
import PremiumPage from './pages/public/collections/PremiumPage';

// =================== APP COMPONENT ===================
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AdminProvider>
          <Router>
            <Routes>
              {/* ---------- PUBLIC ROUTES ---------- */}
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
              <Route path="/product/:id" element={<Layout><ProductDetailPage /></Layout>} />
              <Route path="/cart" element={<Layout><CartPage /></Layout>} />
              <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
              <Route path="/track-order/:orderId" element={<Layout><TrackOrderPage /></Layout>} />

              <Route path="/new-arrivals" element={<Layout><NewArrivalsPage /></Layout>} />
              <Route path="/men" element={<Layout><MensPage /></Layout>} />
              <Route path="/women" element={<Layout><WomensPage /></Layout>} />
              <Route path="/accessories" element={<Layout><AccessoriesPage /></Layout>} />
              <Route path="/sale" element={<Layout><SalePage /></Layout>} />
              <Route path="/collections" element={<Layout><CollectionsPage /></Layout>} />
              <Route path="/category/:category" element={<Layout><CategoryPage /></Layout>} />

              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
              <Route path="/blog/:id" element={<Layout><BlogPostPage /></Layout>} />
              <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
              <Route path="/best-sellers" element={<Layout><BestSellersPage /></Layout>} />
              <Route path="/trending-now" element={<Layout><TrendingNowPage /></Layout>} />
              <Route path="/limited-edition" element={<Layout><LimitedEditionPage /></Layout>} />

              {/* Footer Pages */}
              <Route path="/about/our-story" element={<Layout><OurStoryPage /></Layout>} />
              <Route path="/sustainability" element={<Layout><SustainabilityPage /></Layout>} />
              <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
              <Route path="/press" element={<Layout><PressPage /></Layout>} />

              <Route path="/help" element={<Layout><HelpCenterPage /></Layout>} />
              <Route path="/returns" element={<Layout><ReturnsPage /></Layout>} />
              <Route path="/shipping" element={<Layout><ShippingPage /></Layout>} />
              <Route path="/size-guide" element={<Layout><SizeGuidePage /></Layout>} />
              <Route path="/faq" element={<Layout><FaqPage /></Layout>} />

              <Route path="/privacy" element={<Layout><PrivacyPolicyPage /></Layout>} />
              <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
              <Route path="/cookies" element={<Layout><CookiePolicyPage /></Layout>} />
              <Route path="/accessibility" element={<Layout><AccessibilityPage /></Layout>} />
              <Route path="/gdpr" element={<Layout><GdprPage /></Layout>} />

              {/* ---------- AUTH ROUTES (No Layout) ---------- */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/auth/callback" element={<AuthCallback />} />

              {/* ---------- CATALOG SUB‑ROUTES ---------- */}
              {/* Men */}
              <Route path="/men/tshirts" element={<Layout><TshirtsPage /></Layout>} />
              <Route path="/men/shirts" element={<Layout><ShirtsPage /></Layout>} />
              <Route path="/men/jeans" element={<Layout><JeansPage /></Layout>} />
              <Route path="/men/trousers" element={<Layout><TrousersPage /></Layout>} />
              <Route path="/men/jackets" element={<Layout><JacketsPage /></Layout>} />
              <Route path="/men/shoes" element={<Layout><ShoesPage /></Layout>} />
              <Route path="/men/accessories" element={<Layout><MenAccessoriesPage /></Layout>} />

              {/* Women */}
              <Route path="/women/dresses" element={<Layout><DressesPage /></Layout>} />
              <Route path="/women/tops" element={<Layout><TopsPage /></Layout>} />
              <Route path="/women/skirts" element={<Layout><SkirtsPage /></Layout>} />
              <Route path="/women/pants" element={<Layout><PantsPage /></Layout>} />
              <Route path="/women/jackets" element={<Layout><WomenJacketsPage /></Layout>} />
              <Route path="/women/shoes" element={<Layout><WomenShoesPage /></Layout>} />
              <Route path="/women/accessories" element={<Layout><WomenAccessoriesPage /></Layout>} />

              {/* Kids */}
              <Route path="/kids/boys" element={<Layout><BoysPage /></Layout>} />
              <Route path="/kids/girls" element={<Layout><GirlsPage /></Layout>} />
              <Route path="/kids/infants" element={<Layout><InfantsPage /></Layout>} />
              <Route path="/kids/shoes" element={<Layout><KidsShoesPage /></Layout>} />
              <Route path="/kids/toys" element={<Layout><ToysPage /></Layout>} />

              {/* Occasion Wear */}
              <Route path="/occasion/wedding" element={<Layout><WeddingPage /></Layout>} />
              <Route path="/occasion/party" element={<Layout><PartyPage /></Layout>} />
              <Route path="/occasion/office" element={<Layout><OfficePage /></Layout>} />
              <Route path="/occasion/casual" element={<Layout><CasualPage /></Layout>} />
              <Route path="/occasion/beach" element={<Layout><BeachPage /></Layout>} />

              {/* Collections */}
              <Route path="/collections/summer" element={<Layout><SummerPage /></Layout>} />
              <Route path="/collections/winter" element={<Layout><WinterPage /></Layout>} />
              <Route path="/collections/spring" element={<Layout><SpringPage /></Layout>} />
              <Route path="/collections/fall" element={<Layout><FallPage /></Layout>} />
              <Route path="/collections/diwali" element={<Layout><DiwaliPage /></Layout>} />
              <Route path="/collections/christmas" element={<Layout><ChristmasPage /></Layout>} />
              <Route path="/collections/eid" element={<Layout><EidPage /></Layout>} />
              <Route path="/collections/newyear" element={<Layout><NewYearPage /></Layout>} />
              <Route path="/collections/capsule" element={<Layout><CapsulePage /></Layout>} />
              <Route path="/collections/designer" element={<Layout><DesignerPage /></Layout>} />
              <Route path="/collections/sustainable" element={<Layout><SustainablePage /></Layout>} />
              <Route path="/collections/premium" element={<Layout><PremiumPage /></Layout>} />

              {/* ---------- PROTECTED CUSTOMER ROUTES ---------- */}
              <Route path="/profile" element={<ProtectedRoute><Layout><ProfilePage /></Layout></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><Layout><MyOrdersPage /></Layout></ProtectedRoute>} />
              <Route path="/wishlist" element={<ProtectedRoute><Layout><WishlistPage /></Layout></ProtectedRoute>} />
              <Route path="/address-book" element={<ProtectedRoute><Layout><AddressBookPage /></Layout></ProtectedRoute>} />
              <Route path="/account" element={<ProtectedRoute><Layout><AccountPage /></Layout></ProtectedRoute>} />

              {/* ---------- ADMIN ROUTES ---------- */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="coupons" element={<AdminCoupons />} />
                <Route path="reports" element={<AdminReports />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>

              {/* ---------- 404 NOT FOUND ---------- */}
              <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
            </Routes>
          </Router>
        </AdminProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

