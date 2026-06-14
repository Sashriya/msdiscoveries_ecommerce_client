import React from 'react';

const PressPage = () => {
  const articles = [
    { id: 1, title: 'THEKOUR Named Best New Luxury Brand', outlet: 'Vogue Magazine', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop' },
    { id: 2, title: 'Sustainable Fashion Takes Center Stage', outlet: 'The New York Times', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1483985988355-963728d0471e?w=400&h=300&fit=crop' },
    { id: 3, title: 'THEKOUR Spring Collection Debuts', outlet: 'Harper\'s Bazaar', date: 'Oct 2024', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=300&fit=crop' },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-4">Press</h1>
        <p className="text-gray-500 text-center mb-12">THEKOUR in the news</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6"><p className="text-sm text-gray-500 mb-1">{article.outlet} • {article.date}</p><h3 className="text-xl font-light mb-3">{article.title}</h3><button className="text-black border-b border-black pb-1 hover:pb-2">Read Article →</button></div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gray-50 p-8 rounded-2xl text-center"><h2 className="text-2xl font-light mb-3">Media Inquiries</h2><p className="text-gray-600 mb-4">For press inquiries, please contact our PR team</p><a href="mailto:pr@thekour.com" className="text-black underline">pr@thekour.com</a></div>
      </div>
    </div>
  );
};
export default PressPage;
