// ShopAllPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopAllPage = () => {
  const navigate = useNavigate();

  // All categories data with images
  const categories = {
    'SHOP BY CATEGORY': [
      { name: 'All Products', href: '/shop', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=400&fit=crop' },
      { name: 'Men', href: '/men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=400&fit=crop' },
      { name: 'Women', href: '/women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop' },
      { name: 'Kids', href: '/kids', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&h=400&fit=crop' },
      { name: 'Accessories', href: '/accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop' },
    ],
    'COLLECTIONS': [
      { name: 'Summer', href: '/collections/summer', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop' },
      { name: 'Winter', href: '/collections/winter', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=400&fit=crop' },
      { name: 'Spring', href: '/collections/spring', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop' },
      { name: 'Fall', href: '/collections/fall', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop' },
      { name: 'Diwali', href: '/collections/diwali', image: 'https://images.unsplash.com/photo-1531762908976-c330f5628c0a?w=400&h=400&fit=crop' },
      { name: 'Christmas', href: '/collections/christmas', image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a714?w=400&h=400&fit=crop' },
      { name: 'Eid', href: '/collections/eid', image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41e1c0b?w=400&h=400&fit=crop' },
      { name: 'Capsule', href: '/collections/capsule', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop' },
      { name: 'Designer', href: '/collections/designer', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=400&fit=crop' },
      { name: 'Sustainable', href: '/collections/sustainable', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop' },
      { name: 'Premium', href: '/collections/premium', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop' },
    ],
    'OCCASION WEAR': [
      { name: 'Wedding', href: '/occasion/wedding', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop' },
      { name: 'Party', href: '/occasion/party', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop' },
      { name: 'Office', href: '/occasion/office', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=400&h=400&fit=crop' },
      { name: 'Casual', href: '/occasion/casual', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop' },
      { name: 'Beach', href: '/occasion/beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop' },
    ],
    'FOOTWEAR': [
      { name: 'Sneakers', href: '/footwear/sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
      { name: 'Boots', href: '/footwear/boots', image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=400&fit=crop' },
      { name: 'Sandals', href: '/footwear/sandals', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop' },
      { name: 'Loafers', href: '/footwear/loafers', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop' },
      { name: 'Heels', href: '/footwear/heels', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop' },
      { name: 'Flats', href: '/footwear/flats', image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop' },
    ],
    'BAGS & ACCESSORIES': [
      { name: 'Handbags', href: '/bags/handbags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop' },
      { name: 'Backpacks', href: '/bags/backpacks', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop' },
      { name: 'Tote Bags', href: '/bags/tote-bags', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop' },
      { name: 'Crossbody', href: '/bags/crossbody', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop' },
      { name: 'Wallets', href: '/bags/wallets', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop' },
      { name: 'Belts', href: '/accessories/belts', image: 'https://images.unsplash.com/photo-1553709550-3b91b9f0b1b8?w=400&h=400&fit=crop' },
      { name: 'Scarves', href: '/accessories/scarves', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop' },
      { name: 'Hats', href: '/accessories/hats', image: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?w=400&h=400&fit=crop' },
    ],
    'JEWELRY': [
      { name: 'Necklaces', href: '/jewelry/necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop' },
      { name: 'Earrings', href: '/jewelry/earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop' },
      { name: 'Bracelets', href: '/jewelry/bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop' },
      { name: 'Rings', href: '/jewelry/rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop' },
      { name: 'Watches', href: '/jewelry/watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop' },
    ],
    'HOME & LIVING': [
      { name: 'Bedding', href: '/home/bedding', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop' },
      { name: 'Linen', href: '/home/linen', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop' },
      { name: 'Furniture', href: '/home/furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop' },
      { name: 'Decor', href: '/home/decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=400&fit=crop' },
      { name: 'Lighting', href: '/home/lighting', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop' },
    ]
  };

  const handleCategoryClick = (href) => {
    navigate(href);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="border-b border-gray-100 bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-light tracking-wide">All Categories</h1>
          <p className="text-sm text-gray-500 mt-1">Browse our complete collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* All Categories Sections */}
        {Object.entries(categories).map(([section, items]) => (
          <div key={section} className="mb-10">
            <h2 className="text-lg font-light tracking-wide mb-4 border-b border-gray-100 pb-2">
              {section}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {items.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleCategoryClick(item.href)}
                  className="group bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-light text-sm group-hover:text-black transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Stats Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-light">50+</p>
              <p className="text-xs text-gray-500 mt-1">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-light">200+</p>
              <p className="text-xs text-gray-500 mt-1">Products</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-light">10+</p>
              <p className="text-xs text-gray-500 mt-1">Collections</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-light">5+</p>
              <p className="text-xs text-gray-500 mt-1">Occasions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAllPage;