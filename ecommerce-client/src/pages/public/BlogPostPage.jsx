import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';
import Loader from '../../components/common/Loader';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Find the post from shared blogData
    const foundPost = blogPosts.find(blog => blog.id === parseInt(id));
    
    if (foundPost) {
      setPost(foundPost);
      // Find related posts (same category, different id)
      const related = blogPosts.filter(blog => blog.category === foundPost.category && blog.id !== foundPost.id).slice(0, 2);
      setRelatedPosts(related);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) return <Loader />;
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 text-center">
        <h1 className="text-4xl font-light mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="inline-block bg-black text-white px-6 py-3 rounded-lg">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-cover bg-center bg-no-repeat flex items-end"
           style={{ backgroundImage: `url(${post.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 pb-16 w-full">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium">{post.author}</p>
                <p className="text-xs opacity-75">{post.date} · {post.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl flex gap-4">
          <img src={post.authorImage} alt={post.author} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="font-semibold mb-1">{post.author}</h3>
            <p className="text-sm text-gray-600">{post.authorBio}</p>
            <button className="mt-3 text-sm text-black border-b border-black pb-0.5">Follow →</button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-light mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(related => (
                <div key={related.id} className="group cursor-pointer" onClick={() => navigate(`/blog/${related.id}`)}>
                  <img src={related.image} alt={related.title} className="w-full h-48 object-cover rounded-xl group-hover:opacity-90 transition" />
                  <h3 className="font-medium mt-3 group-hover:text-gray-600 transition">{related.title}</h3>
                  <p className="text-sm text-gray-500">{related.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-6 border-t flex justify-between">
          <Link to="/blog" className="text-black hover:underline">← Back to Journal</Link>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-black hover:underline">
            Back to Top ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;                                                