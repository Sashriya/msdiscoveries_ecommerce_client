import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';
import Loader from '../../components/common/Loader';

const BlogPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Fashion', 'Sustainable', 'Style Tips', 'Interviews', 'Collections'];
  const filteredBlogs = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleReadMore = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4 tracking-wide">
            ✍️ Our Journal
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">THEKOUR Journal</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Stories, style guides, and insights from the world of THEKOUR</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Journal</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.toLowerCase()
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Featured Post */}
        {selectedCategory === 'all' && blogPosts[0] && (
          <div className="group mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-xs text-gray-400">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-4 hover:text-gray-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={blogPosts[0].authorImage} alt={blogPosts[0].author} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium">{blogPosts[0].author}</p>
                      <p className="text-xs text-gray-500">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleReadMore(blogPosts[0].id)}
                    className="flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:pb-2 transition-all"
                  >
                    Read Article 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'all' ? blogPosts.slice(1) : filteredBlogs).map((blog) => (
            <div key={blog.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-400">{blog.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-xs text-gray-400">{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-light mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-xs text-gray-500">{blog.author}</span>
                  </div>
                  <button 
                    onClick={() => handleReadMore(blog.id)}
                    className="text-sm font-medium text-black hover:text-gray-600 transition-colors flex items-center gap-1"
                  >
                    Read More 
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-3">Never Miss a Story</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">Subscribe to our newsletter for the latest articles, style tips, and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            />
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;