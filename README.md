# 🤖 AI Knowledge Hub

> An interactive, modern web application that educates people about Artificial Intelligence, from its history to practical implementations, with community engagement features.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## 📋 Features

### 🏛️ History Section
- **Interactive Timeline**: Explore AI milestones from 1956 to 2025
- **Detailed Events**: Click each year to learn about pivotal moments
- **Key Insights**: Understand AI's evolution and acceleration

### 🔥 Current Technologies
- **6 Leading AI Tools**: ChatGPT, Claude, n8n, GitHub Copilot, Midjourney, Gemini
- **Job Role Mapping**: See how each tool helps different professions
- **Feature Highlights**: Detailed capabilities of each platform
- **Interactive Tool Selector**: Switch between tools to compare

### 💪 Coping with AI
- **Practical Exercises**: Build AI literacy with hands-on activities
- **Learning Resources**: Blog posts and guides on AI fundamentals
- **Category Filters**: Exercise, Coping, and Learning content
- **Tips & Guidance**: Expert advice for thriving with AI

### 👥 Community Forum
- **Share Experiences**: Post positive insights and challenges
- **Like & Engage**: Interact with community posts
- **Filter Posts**: View by positive experiences or challenges
- **Community Guidelines**: Respectful, constructive environment
- **Real-time Updates**: New posts appear instantly

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/vashvibes.git
cd vashvibes

# Install dependencies
npm install

# Start development servers (frontend + backend)
npm run dev:all

# Frontend: http://localhost:5173
# Backend API: http://localhost:5001
```

### Build for Production
```bash
# Build frontend
npm run build

# Preview production build
npm run preview

# Deploy
./deploy.sh
```

---

## 📁 Project Structure

```
vashvibes/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Main navigation bar
│   │   ├── History.jsx              # AI timeline section
│   │   ├── Current.jsx              # Current AI tools
│   │   ├── CopingWithAI.jsx         # Blogs & exercises
│   │   └── CommunityPosts.jsx       # Community forum
│   ├── data/
│   │   ├── historyData.js           # AI timeline data
│   │   ├── currentToolsData.js      # AI tools information
│   │   └── blogsData.js             # Blog articles & exercises
│   ├── styles/
│   │   ├── index.css                # Global styles
│   │   └── components.css           # Component-specific styles
│   ├── App.jsx                      # Main app component
│   └── main.jsx                     # Entry point
├── server/
│   └── server.js                    # Express backend API
├── public/                          # Static assets
├── DEPLOYMENT.md                    # Complete deployment guide
├── DOMAIN_SETUP.md                  # Domain configuration guide
├── deploy.sh                        # Automated deployment script
├── package.json                     # Dependencies & scripts
└── vite.config.js                   # Vite configuration
```

---

## 🎨 Design Highlights

- **Modern UI**: Gradient backgrounds and smooth animations
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Interactive Elements**: Expandable sections, filters, and real-time updates
- **Accessibility**: Semantic HTML and proper color contrast
- **Performance**: Fast load times with optimized Vite build

---

## 💻 Technology Stack

**Frontend:**
- React 19 with Hooks
- Vite for fast development
- Modern CSS with gradients and animations
- Responsive design with CSS Grid

**Backend:**
- Node.js & Express.js
- RESTful API endpoints
- CORS enabled for security
- In-memory data storage (upgradeable to database)

**Deployment:**
- GitHub for version control
- Vercel (recommended) for hosting
- Render/Railway for backend
- Custom domain support

---

## 🔧 API Endpoints

### Community Posts API

```bash
# Get all posts
GET /api/posts

# Get post by ID
GET /api/posts/:id

# Create new post
POST /api/posts
Body: {
  "title": "string",
  "content": "string",
  "sentiment": "positive|negative",
  "author": "string"
}

# Like a post
PUT /api/posts/:id/like

# Delete a post
DELETE /api/posts/:id

# Health check
GET /health
```

---

## 📦 Scripts

```bash
# Development
npm run dev              # Frontend only
npm run server          # Backend only
npm run dev:all         # Both frontend & backend

# Production
npm run build           # Build frontend
npm run preview         # Preview build
npm run lint            # Lint code

# Deployment
./deploy.sh             # Automated deployment
```

---

## 🌍 Deployment

### Quick Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

[See Full Deployment Guide](./DEPLOYMENT.md)

### Domain Configuration

[See Domain Setup Guide](./DOMAIN_SETUP.md)

---

## 📊 Data Included

✓ **12 AI Milestones** - From 1956 to 2025
✓ **6 AI Tools** - ChatGPT, Claude, n8n, GitHub Copilot, Midjourney, Gemini
✓ **30+ Job Roles** - How AI helps different professions
✓ **5 Blog Articles** - Exercises and learning guides
✓ **4 Demo Community Posts** - Sample discussions

---

## 🎓 Content Highlights

### AI Timeline
- Dartmouth Conference (1956) - Birth of AI
- Expert Systems Boom (1980)
- Deep Blue vs Kasparov (1997)
- AlphaGo vs Lee Sedol (2016)
- ChatGPT Launch (2022)
- And more...

### AI Tools Covered
- **ChatGPT**: Conversational AI & code generation
- **Claude**: Advanced reasoning & code review
- **n8n**: Workflow automation
- **GitHub Copilot**: Pair programming
- **Midjourney**: Image generation
- **Gemini**: Multi-modal AI

### Learning Resources
- Daily AI observation exercises
- Prompt engineering challenges
- AI ethics guidelines
- Personal AI toolkit building
- Mindfulness for AI anxiety

---

## 🤝 Community

The Community Forum allows users to:
- Share positive experiences with AI
- Discuss challenges and concerns
- Learn from peers
- Support each other
- Build an engaged community

---

## 📈 Future Enhancements

- [ ] User authentication & profiles
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Comment threads on posts
- [ ] AI-generated content summaries
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced search & filtering
- [ ] Email notifications

---

## 🔒 Security

- CORS enabled for API security
- Input validation on backend
- Environment variables for sensitive data
- HTTPS enforced in production
- XSS protection through React

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Anjali Vashisth**
- GitHub: [@anjalivashisth](https://github.com/anjalivashisth)
- Email: anjalivashisth1111@gmail.com

---

## 🙏 Acknowledgments

- React team for an excellent framework
- Vite team for blazing-fast development
- All contributors to open-source AI projects
- The global AI education community

---

## 📞 Support

For issues, questions, or suggestions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for setup help
2. Check [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) for domain issues
3. Open an issue on GitHub
4. Contact: anjalivashisth1111@gmail.com

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Express.js Documentation](https://expressjs.com)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)

---

**Ready to dive into AI? Start learning today! 🚀**

Visit [AI Knowledge Hub](https://yourdomain.com) and explore the future of Artificial Intelligence.
