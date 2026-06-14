import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: 'How do I track my order?', a: 'Once your order ships, you will receive a tracking number via email. You can also track your order in your account dashboard.' },
    { q: 'What is your return policy?', a: 'We offer 30-day easy returns. Items must be unworn, unwashed, with original tags attached.' },
    { q: 'How long does shipping take?', a: 'Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.' },
    { q: 'Do you offer international shipping?', a: 'Yes, we ship worldwide. Shipping costs and delivery times vary by location.' },
    { q: 'How do I find my size?', a: 'Please refer to our size guide on each product page for detailed measurements.' },
  ];
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-8">FAQs</h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full text-left p-5 font-medium flex justify-between items-center hover:bg-gray-50">
                {faq.q}
                <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && <div className="p-5 pt-0 text-gray-600 border-t">{faq.a}</div>}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><p className="text-gray-600">Still have questions? <Link to="/contact" className="text-black underline">Contact us</Link></p></div>
      </div>
    </div>
  );
};
export default FaqPage;
