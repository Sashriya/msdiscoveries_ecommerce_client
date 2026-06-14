import React, { useState } from 'react';

const SizeGuidePage = () => {
  const [gender, setGender] = useState('men');
  const menSizes = { 'S': { chest: '36-38"', waist: '30-32"' }, 'M': { chest: '38-40"', waist: '32-34"' }, 'L': { chest: '40-42"', waist: '34-36"' }, 'XL': { chest: '42-44"', waist: '36-38"' } };
  const womenSizes = { 'XS': { bust: '32-33"', waist: '24-25"' }, 'S': { bust: '34-35"', waist: '26-27"' }, 'M': { bust: '36-37"', waist: '28-29"' }, 'L': { bust: '38-39"', waist: '30-31"' } };
  const currentSizes = gender === 'men' ? menSizes : womenSizes;
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-4">Size Guide</h1>
        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => setGender('men')} className="px-6 py-2 rounded-full bg-black text-white">Men</button>
          <button onClick={() => setGender('women')} className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200">Women</button>
        </div>
        <table className="w-full border-collapse mb-8">
          <thead><tr className="bg-gray-100">{Object.keys(currentSizes[Object.keys(currentSizes)[0]]).map(key => (<th key={key} className="p-3 border">{key.toUpperCase()}</th>))} </tr></thead>
          <tbody>{Object.entries(currentSizes).map(([size, measurements]) => (<tr key={size}><td className="p-3 border font-semibold">{size}</td>{Object.values(measurements).map((val, i) => (<td key={i} className="p-3 border">{val}</td>))}</tr>))}</tbody>
        </table>
        <div className="bg-gray-50 p-6 rounded-2xl"><h2 className="text-2xl font-light mb-4">How to Measure</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div><h3 className="font-semibold">Chest/Bust</h3><p className="text-sm text-gray-600">Measure around the fullest part</p></div><div><h3 className="font-semibold">Waist</h3><p className="text-sm text-gray-600">Measure around natural waistline</p></div><div><h3 className="font-semibold">Hip</h3><p className="text-sm text-gray-600">Measure around fullest part of hips</p></div></div></div>
      </div>
    </div>
  );
};
export default SizeGuidePage;
