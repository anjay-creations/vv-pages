import '../styles/components.css';

export default function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🤖</span>
          <h1>AI Knowledge Hub</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <button
              className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              📚 History
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeTab === 'current' ? 'active' : ''}`}
              onClick={() => setActiveTab('current')}
            >
              🔥 Current Tools
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeTab === 'coping' ? 'active' : ''}`}
              onClick={() => setActiveTab('coping')}
            >
              💪 Coping with AI
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeTab === 'community' ? 'active' : ''}`}
              onClick={() => setActiveTab('community')}
            >
              👥 Community
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
