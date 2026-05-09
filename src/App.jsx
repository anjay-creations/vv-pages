import { useState } from 'react';
import Navigation from './components/Navigation';
import History from './components/History';
import Current from './components/Current';
import CopingWithAI from './components/CopingWithAI';
import CommunityPosts from './components/CommunityPosts';
import './styles/index.css';
import './styles/components.css';

function App() {
  const [activeTab, setActiveTab] = useState('history');

  const renderContent = () => {
    switch (activeTab) {
      case 'history':
        return <History />;
      case 'current':
        return <Current />;
      case 'coping':
        return <CopingWithAI />;
      case 'community':
        return <CommunityPosts />;
      default:
        return <History />;
    }
  };

  return (
    <div className="app-container">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
