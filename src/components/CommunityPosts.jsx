import { useState, useEffect } from 'react';
import '../styles/components.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5001' : '');

export default function CommunityPosts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    sentiment: 'positive',
    author: ''
  });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/posts`);
      if (!response.ok) {
        throw new Error('Posts API is unavailable');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      // Use demo posts if backend is not available
      setPosts(demoPosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPosts();
  }, []);

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    
    if (!newPost.title.trim() || !newPost.content.trim() || !newPost.author.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const post = {
      ...newPost,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      likes: 0
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });
      
      if (!response.ok) {
        throw new Error('Posts API is unavailable');
      }

      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', sentiment: 'positive', author: '' });
      alert('Post shared successfully! 🎉');
    } catch (error) {
      console.error('Failed to submit post:', error);
      // Still add to UI for demo
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', sentiment: 'positive', author: '' });
    }
  };

  const handleLikePost = async (postId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/posts/${postId}/like`, {
        method: 'PUT'
      });
      
      if (!response.ok) {
        throw new Error('Posts API is unavailable');
      }

      setPosts(posts.map(p => 
        p.id === postId ? { ...p, likes: (p.likes || 0) + 1 } : p
      ));
    } catch (error) {
      console.error('Failed to like post:', error);
      setPosts(posts.map(p => 
        p.id === postId ? { ...p, likes: (p.likes || 0) + 1 } : p
      ));
    }
  };

  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.sentiment === filter);

  return (
    <div className="section community-section">
      <div className="section-header">
        <h2>👥 Community Forum</h2>
        <p>Share your experiences - positive insights and challenges with AI</p>
      </div>

      {/* Post Creation Form */}
      <div className="create-post-container">
        <div className="create-post-card">
          <h3>Share Your Experience</h3>
          <form onSubmit={handleSubmitPost} className="post-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                maxLength="50"
              />
            </div>

            <div className="form-group">
              <label>Post Title</label>
              <input
                type="text"
                placeholder="What's your experience about?"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                maxLength="100"
              />
            </div>

            <div className="form-group">
              <label>Your Story</label>
              <textarea
                placeholder="Share your positive experiences, challenges, learnings, or concerns about AI..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                maxLength="500"
                rows="4"
              />
              <span className="char-count">{newPost.content.length}/500</span>
            </div>

            <div className="form-group">
              <label>Is this experience positive or challenging?</label>
              <div className="sentiment-choice">
                <label>
                  <input
                    type="radio"
                    value="positive"
                    checked={newPost.sentiment === 'positive'}
                    onChange={(e) => setNewPost({ ...newPost, sentiment: e.target.value })}
                  />
                  <span className="positive-tag">✨ Positive Experience</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="negative"
                    checked={newPost.sentiment === 'negative'}
                    onChange={(e) => setNewPost({ ...newPost, sentiment: e.target.value })}
                  />
                  <span className="negative-tag">⚠️ Challenge/Concern</span>
                </label>
              </div>
            </div>

            <button type="submit" className="submit-btn">📤 Share Your Story</button>
          </form>
        </div>
      </div>

      {/* Filter Posts */}
      <div className="posts-filter">
        <h3>Filter Posts</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Posts ({posts.length})
          </button>
          <button
            className={`filter-btn positive-filter ${filter === 'positive' ? 'active' : ''}`}
            onClick={() => setFilter('positive')}
          >
            ✨ Positive ({posts.filter(p => p.sentiment === 'positive').length})
          </button>
          <button
            className={`filter-btn negative-filter ${filter === 'negative' ? 'active' : ''}`}
            onClick={() => setFilter('negative')}
          >
            ⚠️ Challenges ({posts.filter(p => p.sentiment === 'negative').length})
          </button>
        </div>
      </div>

      {/* Posts Display */}
      <div className="posts-container">
        {loading ? (
          <div className="loading">Loading posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="no-posts">
            <p>No posts yet. Be the first to share! 🎉</p>
          </div>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className={`post-card ${post.sentiment}`}>
              <div className="post-header">
                <div>
                  <h3>{post.title}</h3>
                  <p className="post-author">By {post.author}</p>
                </div>
                <span className={`post-sentiment-badge ${post.sentiment}`}>
                  {post.sentiment === 'positive' ? '✨ Positive' : '⚠️ Challenge'}
                </span>
              </div>

              <p className="post-content">{post.content}</p>

              <div className="post-footer">
                <span className="post-date">
                  {new Date(post.timestamp).toLocaleDateString()} {new Date(post.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <button 
                  className="like-btn"
                  onClick={() => handleLikePost(post.id)}
                >
                  👍 {post.likes || 0}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="community-guidelines">
        <h3>📋 Community Guidelines</h3>
        <ul>
          <li>✓ Be respectful and constructive</li>
          <li>✓ Share genuine experiences and insights</li>
          <li>✓ Help others learn and grow</li>
          <li>✓ No spam or promotional content</li>
          <li>✓ Focus on AI-related topics</li>
        </ul>
      </div>
    </div>
  );
}

// Demo posts for when backend is not available
const demoPosts = [
  {
    id: 1,
    title: "ChatGPT Helped Me Land a New Job",
    content: "Used ChatGPT to prepare for interviews, write cover letters, and learn new technical skills. Got hired as a junior developer! The AI helped me practice coding problems and understand complex concepts.",
    author: "Alex Chen",
    sentiment: "positive",
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    likes: 24
  },
  {
    id: 2,
    title: "Concerns About AI Replacing My Job",
    content: "I'm worried that as an accountant, AI might make my role obsolete. I've started learning AI tools to stay relevant, but the anxiety is real. How do others deal with this?",
    author: "Sarah Johnson",
    sentiment: "negative",
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    likes: 18
  },
  {
    id: 3,
    title: "AI Saved Me Hours of Work",
    content: "Used n8n to automate my entire email sorting process. Now I have 2 hours back every week! This tool is incredible for people who want to work smarter, not harder.",
    author: "Mike Rodriguez",
    sentiment: "positive",
    timestamp: new Date(Date.now() - 259200000).toISOString(),
    likes: 32
  },
  {
    id: 4,
    title: "Learning Curve Was Steep But Worth It",
    content: "Started with ChatGPT thinking I'd never understand AI. Now I'm comfortable using multiple tools. The key was just diving in and experimenting. Don't be afraid to fail!",
    author: "Emma Wilson",
    sentiment: "positive",
    timestamp: new Date(Date.now() - 345600000).toISOString(),
    likes: 15
  }
];
