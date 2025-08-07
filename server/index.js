const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:"]
    }
  },
  crossOriginEmbedderPolicy: false
}));

// Compression middleware
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: isProduction ? 100 : 1000, // limit each IP to 100 requests per windowMs in production
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// CORS configuration
const corsOptions = {
  origin: isProduction ? 
    (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : false) :
    true,
  optionsSuccessStatus: 200,
  credentials: true
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static file serving with caching
app.use(express.static(path.join(__dirname, '../client/build'), {
  maxAge: isProduction ? '1y' : '0',
  etag: true,
  lastModified: true
}));

// API Routes
app.get('/api/posts', (req, res) => {
  try {
    const dataDir = path.join(__dirname, 'data');
    
    // Check if data directory exists
    if (!fs.existsSync(dataDir)) {
      return res.json([]);
    }

    // Read all JSON files from data directory
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));
    const posts = [];

    files.forEach(file => {
      try {
        const filePath = path.join(dataDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const post = JSON.parse(fileContent);
        posts.push(post);
      } catch (error) {
        console.error(`Error reading file ${file}:`, error);
      }
    });

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single post by slug
app.get('/api/posts/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const filePath = path.join(__dirname, 'data', `${slug}.json`);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContent);
    
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: isProduction ? 'Something went wrong!' : err.message 
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Process terminated');
  });
});

const server = app.listen(PORT, process.env.SERVER_HOST || '0.0.0.0', () => {
  console.log(`🚀 Server running on ${process.env.SERVER_HOST || '0.0.0.0'}:${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api/posts`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  if (isProduction) {
    console.log('🔒 Production mode: Security headers enabled, rate limiting active');
  }
});