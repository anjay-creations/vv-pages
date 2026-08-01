import '../styles/components.css';

export default function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">�</span>
          <h1>Magical Corner</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <button
              className={`nav-link ${activeTab === 'myblogs' ? 'active' : ''}`}
              onClick={() => setActiveTab('myblogs')}
            >
              🪄 My Blogs
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              🎮 Fun Time
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeTab === 'side' ? 'active' : ''}`}
              onClick={() => setActiveTab('side')}
            >
              🌙 Another Side
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
