import { useEffect } from 'react';
import '../styles/components.css';

const myBlogs = [
  {
    title: 'Has time really sped up?',
    url: 'https://www.linkedin.com/pulse/has-time-really-sped-up-anjali-vashisth-rl4lf/'
  },
  {
    title: 'AI tool your master? Finding peace in the digital age',
    url: 'https://www.linkedin.com/pulse/ai-tool-your-master-finding-peace-digital-age-anjali-vashisth-oftec/?trackingId=kojKXWVcReCvPaTAQYOlRQ%3D%3D'
  },
  {
    title: 'Working wife, kitchen lessons & data engineering',
    url: 'https://www.linkedin.com/pulse/working-wife-kitchen-lessons-data-engineering-anjali-vashisth-hjbzc/?trackingId=kojKXWVcReCvPaTAQYOlRQ%3D%3D'
  },
  {
    title: 'Think your wish',
    url: 'https://www.linkedin.com/pulse/think-your-wish-anjali-vashisth/?trackingId=kojKXWVcReCvPaTAQYOlRQ%3D%3D'
  }
];

const funIdeas = [
  'Mystery scavenger hunt with hidden clues in every corner',
  'Wizard trivia showdown with house points and tiny rewards',
  'Human bingo where teams make the funniest match-ups',
  'Choreographed dance-off with a spotlight moment for every team'
];

export default function CopingWithAI({ activeTab = 'myblogs' }) {
  useEffect(() => {
    const section = document.getElementById(activeTab);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]);

  return (
    <div className="section magical-section">
      <div className="magical-hero">
        <div className="hero-copy">
          <p className="eyebrow">A hidden corner of calm, color, and magic</p>
          <h2>Welcome to my little Hogwarts-inspired world</h2>
          <p>
            This page holds the story of my writing, the joy of team play, and a quiet place for
            the part of me that is still being discovered.
          </p>
        </div>

        <div className="music-player-card">
          <span className="music-label">🎵 Background music</span>
          <audio controls loop preload="none" className="magic-audio">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>

      <div className="magic-grid">
        <section id="myblogs" className="magic-card">
          <div className="card-heading">
            <span>🪄</span>
            <h3>My Blogs</h3>
          </div>
          <div className="scrollable-stack">
            {myBlogs.map((blog) => (
              <a
                key={blog.title}
                className="story-link"
                href={blog.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>{blog.title}</span>
                <small>Open article ↗</small>
              </a>
            ))}
          </div>
        </section>

        <section id="team" className="magic-card">
          <div className="card-heading">
            <span>🎮</span>
            <h3>Fun Time Ideas with Team</h3>
          </div>
          <ul className="idea-list">
            {funIdeas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
          <div className="organise-tag">Tag below: organise a game for more than 50 people</div>
        </section>

        <section id="side" className="magic-card placeholder-card">
          <div className="card-heading">
            <span>🌙</span>
            <h3>Another Side of Me</h3>
          </div>
          <p>
            This space is reserved for the quieter, deeper, and more personal pieces of me. It will
            be filled later with stories, snapshots, and reflections.
          </p>
        </section>
      </div>
    </div>
  );
}
