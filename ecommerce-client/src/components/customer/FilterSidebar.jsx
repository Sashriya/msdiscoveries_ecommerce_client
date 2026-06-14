// src/components/customer/FilterSidebar.jsx
import React, { useState } from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);

  const categories = ['Polos', 'T-Shirts', 'Shirts', 'Sweaters', 'Hoodies & Sweatshirts'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Navy', 'Grey', 'Beige', 'Brown'];
  const fits = ['Slim', 'Regular', 'Oversized'];

  const handleCategoryChange = (cat) => {
    const current = filters.category || [];
    const updated = current.includes(cat) ? current.filter(c => c !== cat) : [...current, cat];
    setFilters({ ...filters, category: updated });
  };

  const handleSizeChange = (size) => {
    const current = filters.sizes || [];
    const updated = current.includes(size) ? current.filter(s => s !== size) : [...current, size];
    setFilters({ ...filters, sizes: updated });
  };

  const handleColorChange = (color) => {
    const current = filters.colors || [];
    const updated = current.includes(color) ? current.filter(c => c !== color) : [...current, color];
    setFilters({ ...filters, colors: updated });
  };

  const handleFitChange = (fit) => {
    const current = filters.fits || [];
    const updated = current.includes(fit) ? current.filter(f => f !== fit) : [...current, fit];
    setFilters({ ...filters, fits: updated });
  };

  const handlePriceChange = (e) => {
    const newRange = [...priceRange];
    newRange[e.target.name === 'min' ? 0 : 1] = Number(e.target.value);
    setPriceRange(newRange);
    setFilters({ ...filters, priceRange: newRange });
  };

  const clearAllFilters = () => {
    setFilters({});
    setPriceRange([0, 500]);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm sticky top-24">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Category</h3>
        <button onClick={clearAllFilters} className="text-sm text-gray-500 hover:text-black">All Filters</button>
      </div>

      {/* Category list */}
      <div className="space-y-2 mb-6">
        {categories.map(cat => (
          <label key={cat} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.category?.includes(cat) || false} onChange={() => handleCategoryChange(cat)} />
            {cat}
          </label>
        ))}
      </div>

      {/* Size */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`px-3 py-1 border rounded-md text-sm ${filters.sizes?.includes(size) ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Color</h4>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`px-3 py-1 border rounded-md text-sm ${filters.colors?.includes(color) ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price</h4>
        <div className="flex items-center gap-2">
          <input type="number" name="min" value={priceRange[0]} onChange={handlePriceChange} placeholder="Min" className="w-full border rounded px-2 py-1 text-sm" />
          <span>-</span>
          <input type="number" name="max" value={priceRange[1]} onChange={handlePriceChange} placeholder="Max" className="w-full border rounded px-2 py-1 text-sm" />
        </div>
      </div>

      {/* Fit */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Fit</h4>
        <div className="flex flex-wrap gap-2">
          {fits.map(fit => (
            <button
              key={fit}
              onClick={() => handleFitChange(fit)}
              className={`px-3 py-1 border rounded-md text-sm ${filters.fits?.includes(fit) ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}
            >
              {fit}
            </button>
          ))}
        </div>
      </div>

      <button onClick={clearAllFilters} className="w-full mt-2 py-2 text-sm border border-black rounded-lg hover:bg-black hover:text-white transition">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;