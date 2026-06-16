import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const blogPosts = {
      1: { id: 1, title: 'The Art of Italian Craftsmanship', content: 'Full content here...', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=400&fit=crop', category: 'Fashion', date: 'Dec 15, 2024', author: 'Sarah Johnson' },
      2: { id: 2, title: 'Sustainable Luxury: The Future of Fashion', content: 'Full content here...', image: 'https://images.unsplash.com/photo-1483985988355-963728d0471e?w=800&h=400&fit=crop', category: 'Sustainable', date: 'Dec 10, 2024', author: 'Michael Chen' }
    };
    setTimeout(() => {
      setPost(blogPosts[id] || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) return <Loader />;
  if (!post) return <div className="min-h-screen py-12 text-center"><h1 className="text-4xl font-light">Post Not Found</h1><Link to="/blog" className="text-black underline">Back to Blog</Link></div>;

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/blog" className="text-gray-500 hover:text-black mb-4 inline-block">← Back to Blog</Link>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <div className="text-sm text-gray-500 mb-2">{post.category} • {post.date}</div>
        <h1 className="text-4xl font-light mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">By {post.author}</p>
        <p className="text-gray-600 leading-relaxed">{post.content || 'Full article content goes here...'}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
