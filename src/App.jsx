import { useEffect, useMemo, useState } from 'react';
import './index.css';
import timeArticle from './content/blogs/has-time-really-sped-up.md?raw';
import aiArticle from './content/blogs/ai-is-a-tool-not-your-master.md?raw';
import workingWifeArticle from './content/blogs/working-wife-kitchen-lessons.md?raw';
import wishArticle from './content/blogs/think-as-your-wish.md?raw';

const worlds = [
  { id: 'reads', label: 'Good Reads', icon: '◒', hint: 'The library' },
  { id: 'games', label: 'Games', icon: '♟', hint: 'The playground' },
  { id: 'recipes', label: 'Recipes', icon: '♨', hint: 'The potion café' },
  { id: 'career', label: 'Career Prediction', icon: '✦', hint: 'The oracle door' },
  { id: 'consult', label: 'Consultation', icon: '☼', hint: 'The quiet temple' },
];

const shelves = {
  'Time Management': [
    { title: 'Has Time Really Sped Up?', read: '7 min', color: '#d97b45' },
    { title: 'The Gentle Art of Saying No', read: '5 min', color: '#e4af55' },
  ],
  'Dealing with AI': [
    { title: 'AI Is A Tool, Not Your Master', read: '3 min', color: '#648a78' },
    { title: 'Human, Still', read: '4 min', color: '#a56551' },
  ],
  'Work Lessons': [
    { title: 'Working Wife — Kitchen Lessons', read: '4 min', color: '#5f7896' },
    { title: 'Meetings That Could Be Gardens', read: '5 min', color: '#98704d' },
  ],
  'Personal Philosophies': [
    { title: 'Think as Your Wish', read: '3 min', color: '#7c6b8d' },
    { title: 'Choose Wonder', read: '3 min', color: '#6c8b55' },
  ],
};

const publishedPosts = {
  'Has Time Really Sped Up?': {
    content: timeArticle,
    linkedIn: 'https://www.linkedin.com/pulse/has-time-really-sped-up-anjali-vashisth-rl4lf/',
  },
  'AI Is A Tool, Not Your Master': {
    content: aiArticle,
    linkedIn: 'https://www.linkedin.com/pulse/ai-tool-your-master-finding-peace-digital-age-anjali-vashisth-oftec/',
  },
  'Working Wife — Kitchen Lessons': {
    content: workingWifeArticle,
    linkedIn: 'https://www.linkedin.com/pulse/working-wife-kitchen-lessons-data-engineering-anjali-vashisth-hjbzc/',
  },
  'Think as Your Wish': {
    content: wishArticle,
    linkedIn: 'https://www.linkedin.com/pulse/think-your-wish-anjali-vashisth/',
  },
};

const gamePrompts = {
  face: [
    'Your manager says “quick call” at 5:59 PM.',
    'You find an extra snack in your desk drawer.',
    'The meeting ends twenty minutes early.',
    'Someone says the spreadsheet did not save.',
  ],
  wrong: [
    'Why do we have Mondays?',
    'What is the best use for a laptop?',
    'How should you prepare for a big meeting?',
    'What does the office printer actually want?',
  ],
};

const recipeCards = [
  ['Quick Office Recipes', 'desk-friendly', '🥪'],
  ['Quick Home Recipes', 'under 20 mins', '🍜'],
  ['Dinner Recipes', 'slow & comforting', '🍲'],
  ['Indian Recipes', 'warm & spiced', '🫓'],
  ['Italian Recipes', 'simple & bright', '🍝'],
];

function Intro({ onEnter }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onEnter();
      return undefined;
    }
    const timer = setTimeout(onEnter, 5600);
    return () => clearTimeout(timer);
  }, [onEnter]);
  return (
    <div className="intro" aria-label="A character enters an office and opens a laptop">
      <button className="skip" onClick={onEnter}>Skip intro ↗</button>
      <div className="intro-sun" />
      <div className="office-window"><span /><span /></div>
      <div className="office-plant">☘</div>
      <div className="desk"><div className="laptop"><div className="laptop-screen"><span className="tiny-leaf">❧</span><b>VashVibes</b><small>A little corner for curious minds</small></div></div></div>
      <div className="person"><i className="head"/><i className="hair"/><i className="body"/><i className="leg one"/><i className="leg two"/></div>
      <div className="intro-copy"><span>Take a breath.</span><strong>Your little world is waking up…</strong></div>
    </div>
  );
}

function TreeNav({ page, setPage, open, setOpen }) {
  return (
    <aside className={`tree-nav ${open ? 'open' : ''}`}>
      <div className="nav-canopy">{open && <span>✦ wander somewhere ✦</span>}</div>
      <nav aria-label="World navigation">
        <button className={`branch home-branch ${page === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}><i>⌂</i><span>Home</span></button>
        {worlds.map((item, i) => (
          <button style={{ '--i': i }} className={`branch ${page === item.id ? 'active' : ''}`} key={item.id} onClick={() => setPage(item.id)}>
            <i>{item.icon}</i><span>{item.label}<small>{item.hint}</small></span>
          </button>
        ))}
      </nav>
      <button className="trunk" aria-label={open ? 'Hide navigation' : 'Show navigation'} onClick={() => setOpen(!open)}><span className="trunk-face">{open ? '×' : '☰'}</span><small>{open ? 'close' : 'explore'}</small></button>
    </aside>
  );
}

function PageHeader({ eyebrow, title, copy }) {
  return <header className="page-header"><p>{eyebrow}</p><h1>{title}</h1><span>{copy}</span></header>;
}

function Home({ setPage }) {
  return (
    <section className="world home-world">
      <div className="floating-leaves"><i>☘</i><i>❧</i><i>☘</i></div>
      <div className="home-copy"><p className="eyebrow">WELCOME TO VASHVIBES</p><h1>A quiet corner<br/>for <em>curious minds.</em></h1><p>Stories, play, recipes and thoughtful guidance —<br/>all growing under one canopy.</p><button className="primary" onClick={() => setPage('reads')}>Begin wandering <span>→</span></button></div>
      <div className="hero-garden"><div className="sun"/><div className="cloud c1"/><div className="cloud c2"/><div className="hill back"/><div className="hill front"/><div className="big-tree"><div className="tree-top"><i/><i/><i/><i/></div><b/></div><div className="bench">⌑</div><div className="flowers">✿　✽　✿　✽　✿</div></div>
      <div className="world-chips">{worlds.slice(0,3).map(w => <button onClick={() => setPage(w.id)} key={w.id}><i>{w.icon}</i><span>{w.label}<small>{w.hint}</small></span>↗</button>)}</div>
    </section>
  );
}

function Reads() {
  const [post, setPost] = useState(null);
  const article = post ? publishedPosts[post.title] : null;
  const renderArticle = (content) => content.split(/\n+/).filter(Boolean).map((block, index) => {
    if (block.startsWith('# ')) return null;
    if (block.startsWith('## ')) return <h2 key={index}>{block.slice(3)}</h2>;
    return <p key={index}>{block}</p>;
  });
  if (post) return <section className="world article-world"><button className="back" onClick={() => setPost(null)}>← Back to the library</button><article><p className="eyebrow">READING ROOM · {post.read} READ</p><h1>{post.title}</h1><p className="article-lead">A reflection on attention, pace, and making room for what matters.</p><div className="article-rule">❧</div><div className="article-scroll">{article ? renderArticle(article.content) : <div className="coming-soon"><span>❧</span><h2>This story is still being written.</h2><p>Add its Markdown file to the blog content folder when it is ready.</p></div>}</div><footer>{article && <a className="primary" href={article.linkedIn} target="_blank" rel="noreferrer">Read the original on LinkedIn ↗</a>}</footer></article></section>;
  return <section className="world library-world"><PageHeader eyebrow="THE READING ROOM" title="Stories live here." copy="Pull up a chair. Stay as long as you like."/><div className="library-scene"><div className="library-window">☾</div><div className="lamp">◉</div>{Object.entries(shelves).map(([name, books], si) => <div className="shelf" key={name}><h2><span>0{si+1}</span>{name}</h2><div className="books">{books.map((book, bi) => <button key={book.title} onClick={() => setPost(book)} style={{'--book': book.color}}><i>{bi % 2 ? '✦' : '❦'}</i><b>{book.title}</b><small>{book.read} read　→</small></button>)}</div></div>)}</div></section>;
}

function Games() {
  const [names, setNames] = useState('Anjali, Rahul, Maya');
  const [game, setGame] = useState('face');
  const [round, setRound] = useState(null);
  const play = () => { const people = names.split(',').map(n => n.trim()).filter(Boolean); const prompts = gamePrompts[game]; setRound({ person: people[Math.floor(Math.random()*people.length)] || 'Someone', prompt: prompts[Math.floor(Math.random()*prompts.length)] }); };
  return <section className="world games-world"><PageHeader eyebrow="THE PLAYGROUND" title="Leave serious at the gate." copy="Gather your people. Pick a game. Make a memory."/><div className="playground"><div className="swing"><i/><i/><b/></div><div className="cloud c1"/><div className="cloud c2"/><div className="game-room"><span className="room-tag">SESSION ROOM · 01</span><h2>Who’s playing?</h2><p>Enter names, separated by commas.</p><input value={names} onChange={e => setNames(e.target.value)} /><div className="game-boxes"><button className={game === 'face' ? 'selected' : ''} onClick={() => setGame('face')}><i>☺</i><b>Make The Face</b><small>Act it out. No words allowed.</small></button><button className={game === 'wrong' ? 'selected' : ''} onClick={() => setGame('wrong')}><i>?!</i><b>Wrong Answers Only</b><small>The more absurd, the better.</small></button></div><button className="primary full" onClick={play}>Start a round　→</button>{round && <div className="prompt-card"><span>{round.person}, you’re up!</span><strong>{round.prompt}</strong><button onClick={play}>Another one ↻</button></div>}</div></div></section>;
}

function Recipes() {
  const [calories, setCalories] = useState(500); const [picked, setPicked] = useState('');
  const choose = () => setPicked(calories < 400 ? 'Lemon poha with peas — bright, quick, and about 330 kcal.' : calories < 650 ? 'Creamy tomato pasta with garden salad — comforting at about 520 kcal.' : 'Rajma rice bowl with cucumber raita — hearty at about 680 kcal.');
  return <section className="world recipes-world"><PageHeader eyebrow="THE POTION CAFÉ" title="A little magic, served warm." copy="Choose a cauldron. Something good is always brewing."/><div className="cafe-grid">{recipeCards.map((r,i) => <button className="cauldron-card" key={r[0]}><span className={`steam s${i}`}>〰</span><i>{r[2]}</i><b>{r[0]}</b><small>{r[1]}　→</small></button>)}</div><div className="recipe-picker"><div><p>FEELING INDECISIVE?</p><h2>Let the cauldron choose.</h2><span>Tell us your calorie comfort zone.</span></div><div className="calorie-input"><label><input type="number" value={calories} onChange={e=>setCalories(Number(e.target.value))}/><small>CALORIES</small></label><button onClick={choose}>Conjure my recipe ✦</button></div>{picked && <p className="recipe-result">✦ {picked}</p>}</div></section>;
}

const careerQuestions = [
  ['What kind of challenge lights you up?', ['Making something beautiful', 'Solving a complex puzzle', 'Helping someone grow']],
  ['Your ideal workday feels…', ['Free and expressive', 'Focused and methodical', 'Social and meaningful']],
  ['Pick a natural element.', ['Wildflowers', 'Mountain stone', 'Flowing water']],
];
function Career() {
  const [step,setStep]=useState(0); const [answers,setAnswers]=useState([]); const done=step===careerQuestions.length;
  const result = useMemo(() => { const counts=[0,0,0]; answers.forEach(a=>counts[a]++); const top=counts.indexOf(Math.max(...counts)); return [['Creative Strategist','Brand designer, writer or experience curator'],['Systems Thinker','Product manager, analyst or software builder'],['People Guide','Coach, educator or community lead']][top]; },[answers]);
  return <section className="world career-world"><div className="stars">✦　·　✧　　·　✦　·　✧</div><PageHeader eyebrow="THE ORACLE DOOR" title={done ? 'The path is becoming clear.' : 'Your next chapter is knocking.'} copy={done ? 'Not a verdict — a direction worth exploring.' : 'Answer from instinct. There are no wrong paths.'}/><div className={`oracle-door ${done ? 'open-door' : ''}`}><div className="wand">⌁<i>✦</i></div>{!done ? <div className="question"><span>QUESTION {step+1} OF {careerQuestions.length}</span><h2>{careerQuestions[step][0]}</h2>{careerQuestions[step][1].map((a,i)=><button key={a} onClick={()=>{setAnswers([...answers,i]);setStep(step+1)}}>{a}<i>→</i></button>)}</div> : <div className="result"><span>YOUR COMPASS POINTS TOWARD</span><h2>{result[0]}</h2><p>{result[1]}</p><button onClick={()=>{setStep(0);setAnswers([])}}>Ask the oracle again ↻</button></div>}</div></section>;
}

function Consultation() {
  const [messages,setMessages]=useState([{from:'guide',text:'Welcome. What has been taking up the most space in your mind lately?'}]); const [input,setInput]=useState('');
  const send=()=>{if(!input.trim())return; const val=input; setInput(''); setMessages(m=>[...m,{from:'you',text:val},{from:'guide',text:'Thank you for sharing that. If this feeling could ask you for one small thing today, what would it be?'}]);};
  return <section className="world consult-world"><PageHeader eyebrow="THE QUIET TEMPLE" title="Climb slowly. Speak freely." copy="A thoughtful space to untangle what’s on your mind."/><div className="temple-scene"><div className="temple">⌂<i/><i/><i/></div><div className="steps"><i/><i/><i/><i/><i/></div><div className="chat"><header><i>☼</i><div><b>Your quiet guide</b><small>HERE WITH YOU · PRIVATE SESSION</small></div><span>●</span></header><main>{messages.map((m,i)=><p className={m.from} key={i}><small>{m.from === 'guide' ? 'GUIDE' : 'YOU'}</small>{m.text}</p>)}</main><footer><input placeholder="Write what’s on your mind…" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()}/><button onClick={send}>↑</button></footer></div></div></section>;
}

function App() {
  const [intro, setIntro] = useState(true); const [page, setPage] = useState('home'); const [navOpen, setNavOpen] = useState(false);
  const content = { home:<Home setPage={setPage}/>, reads:<Reads/>, games:<Games/>, recipes:<Recipes/>, career:<Career/>, consult:<Consultation/> }[page];
  if (intro) return <Intro onEnter={() => setIntro(false)}/>;
  return <div className={`app page-${page}`}><TreeNav page={page} setPage={setPage} open={navOpen} setOpen={setNavOpen}/><main key={page}>{content}</main><footer className="site-footer"><span>VASHVIBES</span><i>Made with curiosity & a little bit of magic.</i><small>© 2026 · Grow gently.</small></footer></div>;
}

export default App;
