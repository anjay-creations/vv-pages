import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory data storage (in production, use a real database)
let posts = [
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

// Routes

// Get all posts
app.get('/api/posts', (req, res) => {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  res.json(sortedPosts);
});

// Get post by ID
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Create new post
app.post('/api/posts', (req, res) => {
  const { title, content, sentiment, author } = req.body;

  // Validation
  if (!title || !content || !sentiment || !author) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newPost = {
    id: Math.max(...posts.map(p => p.id), 0) + 1,
    title,
    content,
    sentiment,
    author,
    timestamp: new Date().toISOString(),
    likes: 0
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Like a post
app.put('/api/posts/:id/like', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    post.likes = (post.likes || 0) + 1;
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Delete post
app.delete('/api/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index > -1) {
    const deletedPost = posts.splice(index, 1);
    res.json(deletedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ AI Knowledge Hub Backend running on http://localhost:${PORT}`);
  console.log(`📚 API endpoints available at http://localhost:${PORT}/api/posts`);
});
