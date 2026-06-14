import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const categories = ['Men', 'Women', 'Accessories', 'Footwear'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
      <h3 className="font-semibold mb-4">Filters</h3>
      <div className="mb-6">
        <h4 className="font-medium mb-2">Categories</h4>
        {categories.map(cat => (
          <label key={cat} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">{cat}</span>
          </label>
        ))}
      </div>
      <button className="w-full text-sm text-gray-500 hover:text-black">Clear All</button>
    </div>
  );
};

export default FilterSidebar;
