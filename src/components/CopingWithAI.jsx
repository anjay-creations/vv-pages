import { useState } from 'react';
import { copingBlogs } from '../data/blogsData';
import '../styles/components.css';

export default function CopingWithAI() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', 'Exercise', 'Coping', 'Learning'];
  const filteredBlogs = filterCategory === 'all' 
    ? copingBlogs 
    : copingBlogs.filter(blog => blog.category === filterCategory);

  return (
    <div className="section coping-section">
      <div className="section-header">
        <h2>💪 Coping with AI</h2>
        <p>Learn, practice, and grow with AI through exercises and mindful exploration</p>
      </div>

      <div className="coping-intro">
        <div className="intro-card">
          <h3>🎯 What You'll Learn</h3>
          <ul>
            <li>Practical exercises to build AI literacy</li>
            <li>Strategies to overcome AI anxiety</li>
            <li>How to choose the right tools for your needs</li>
            <li>Ethical considerations in AI usage</li>
            <li>Real-world applications and best practices</li>
          </ul>
        </div>
      </div>

      <div className="blogs-filter">
        <h3>📂 Filter by Category</h3>
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filterCategory === cat ? 'active' : ''}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat === 'all' ? 'All Articles' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="blogs-container">
        <div className="blogs-list">
          {filteredBlogs.map(blog => (
            <div
              key={blog.id}
              className={`blog-card ${selectedBlog?.id === blog.id ? 'expanded' : ''}`}
              onClick={() => setSelectedBlog(selectedBlog?.id === blog.id ? null : blog)}
            >
              <div className="blog-header">
                <div>
                  <h3>{blog.title}</h3>
                  <div className="blog-meta">
                    <span className="category-badge">{blog.category}</span>
                    <span className="difficulty-badge">{blog.difficulty}</span>
                    <span className="read-time">📖 {blog.readTime}</span>
                  </div>
                </div>
                <span className="expand-icon">
                  {selectedBlog?.id === blog.id ? '▼' : '▶'}
                </span>
              </div>

              {selectedBlog?.id === blog.id && (
                <div className="blog-content">
                  <div className="markdown-content">
                    {blog.content.split('\n').map((line, idx) => {
                      if (line.startsWith('# ')) return <h2 key={idx}>{line.substring(2)}</h2>;
                      if (line.startsWith('## ')) return <h3 key={idx}>{line.substring(3)}</h3>;
                      if (line.startsWith('- ')) return <li key={idx}>{line.substring(2)}</li>;
                      if (line.trim() === '') return <br key={idx} />;
                      return <p key={idx}>{line}</p>;
                    })}
                  </div>

                  <div className="blog-tips">
                    <h4>💡 Key Tips</h4>
                    <ul>
                      {blog.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="blog-footer">
                    <span className="blog-date">📅 {new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="blogs-sidebar">
          <div className="sidebar-card">
            <h3>🌟 Featured Insight</h3>
            <p>The key to thriving in an AI-powered world is continuous learning and adaptation. Start with one tool, master it, then expand.</p>
          </div>

          <div className="sidebar-card">
            <h3>✅ Action Items</h3>
            <ul>
              <li>✓ Read one blog this week</li>
              <li>✓ Try one exercise daily</li>
              <li>✓ Join the community</li>
              <li>✓ Share your progress</li>
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>🎓 Learning Path</h3>
            <ol>
              <li>Beginner exercises first</li>
              <li>Learn about AI ethics</li>
              <li>Build your toolkit</li>
              <li>Share with others</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
