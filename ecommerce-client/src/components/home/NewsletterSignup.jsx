import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      setStatus('success');
      setEmail('');
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-light mb-4">Join Our Community</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Subscribe to receive exclusive offers, early access to new arrivals, and 15% off your first order.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-green-400 animate-pulse">✓ Thanks for subscribing! Check your inbox.</p>
        )}
        
        <p className="text-xs text-gray-500 mt-6">
          By subscribing, you agree to our <a href="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</a> and consent to receive updates.
        </p>
      </div>
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="border-t border-gray-800"></div>
      </div>
    </section>
  );
};

export default NewsletterSignup;