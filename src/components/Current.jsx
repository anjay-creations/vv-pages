import { useState } from 'react';
import { aiToolsData } from '../data/currentToolsData';
import '../styles/components.css';

export default function Current() {
  const [selectedTool, setSelectedTool] = useState(0);

  return (
    <div className="section current-section">
      <div className="section-header">
        <h2>🔥 Current AI Technologies</h2>
        <p>Discover leading AI tools and how they help different job roles</p>
      </div>

      <div className="tools-container">
        <div className="tools-sidebar">
          <h3>AI Tools</h3>
          <div className="tools-list">
            {aiToolsData.map((tool, index) => (
              <button
                key={tool.id}
                className={`tool-button ${selectedTool === index ? 'active' : ''}`}
                onClick={() => setSelectedTool(index)}
              >
                <span className="tool-icon">{tool.icon}</span>
                <span>{tool.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="tool-detail">
          {aiToolsData.length > 0 && (
            <div className="tool-card">
              <div className="tool-header">
                <span className="tool-icon-large">{aiToolsData[selectedTool].icon}</span>
                <div>
                  <h2>{aiToolsData[selectedTool].name}</h2>
                  <p className="tool-description">{aiToolsData[selectedTool].description}</p>
                </div>
              </div>

              <div className="tool-features">
                <h3>✨ Key Features</h3>
                <ul>
                  {aiToolsData[selectedTool].features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="tool-job-roles">
                <h3>💼 How It Helps by Job Role</h3>
                <div className="job-roles-grid">
                  {aiToolsData[selectedTool].jobRoles.map((job, idx) => (
                    <div key={idx} className="job-role-card">
                      <h4>{job.role}</h4>
                      <p>{job.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="tools-footer">
        <div className="footer-card">
          <h4>💡 Pro Tip</h4>
          <p>Different tools excel at different tasks. Consider combining multiple tools for optimal workflow.</p>
        </div>
        <div className="footer-card">
          <h4>🚀 Getting Started</h4>
          <p>Most tools offer free tiers. Start experimenting today to find what works best for you!</p>
        </div>
      </div>
    </div>
  );
}
