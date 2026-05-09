import { useState } from 'react';
import { aiHistoryData } from '../data/historyData';
import '../styles/components.css';

export default function History() {
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <div className="section history-section">
      <div className="section-header">
        <h2>📚 History of AI</h2>
        <p>Explore the major milestones that shaped Artificial Intelligence</p>
      </div>

      <div className="history-timeline">
        <div className="timeline-container">
          {aiHistoryData.map((event) => (
            <div key={event.year} className="timeline-item">
              <div className="timeline-marker">
                <span className="year-badge">{event.year}</span>
              </div>
              <div className="timeline-content">
                <div
                  className={`timeline-card ${selectedYear === event.year ? 'expanded' : ''}`}
                  onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                >
                  <h3>{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  {selectedYear === event.year && (
                    <div className="timeline-details">
                      <p>{event.details}</p>
                    </div>
                  )}
                  <span className="expand-icon">
                    {selectedYear === event.year ? '▼' : '▶'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="history-stats">
        <div className="stat-card">
          <h4>Key Insight</h4>
          <p>AI has evolved from theoretical concept (1956) to everyday technology in less than 70 years.</p>
        </div>
        <div className="stat-card">
          <h4>Recent Acceleration</h4>
          <p>The pace of AI advancement has dramatically accelerated in the last 5 years.</p>
        </div>
        <div className="stat-card">
          <h4>Future Direction</h4>
          <p>AI is moving from general models to specialized, domain-specific applications.</p>
        </div>
      </div>
    </div>
  );
}
