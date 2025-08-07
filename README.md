# 🚀 CryptoLaunch - Live Crypto Presales Tracker

A modern, full-stack crypto presale affiliate website built with React, Node.js, Tailwind CSS, and Flowbite.

## ✨ Features

- **Live Presale Tracking**: Real-time updates of cryptocurrency presales
- **Responsive Design**: Optimized for desktop and mobile devices
- **Affiliate Integration**: Built-in affiliate link management
- **SEO Optimized**: Schema markup and meta tags for better search visibility
- **Modern UI/UX**: Built with Tailwind CSS and Flowbite components
- **Fast Performance**: Optimized React frontend with Express backend

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS, Flowbite React
- **Backend**: Node.js, Express.js
- **Data Storage**: JSON files (no database required)
- **SEO**: React Helmet with Schema.org markup
- **Styling**: Tailwind CSS with custom crypto-themed design

## 📁 Project Structure

```
crypto-presales-webapp/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/        # Page components
│   │   └── utils/        # Utility functions
├── server/                # Express backend
│   ├── data/             # JSON data files
│   └── index.js          # Server entry point
└── package.json          # Root package configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Install all dependencies**:
   ```bash
   npm run install-all
   ```

2. **Start development servers**:
   ```bash
   npm run dev
   ```

   This starts both the React frontend (port 3000) and Express backend (port 5000) concurrently.

3. **Open your browser**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api/posts

### Individual Commands

- **Start backend only**: `npm run server`
- **Start frontend only**: `npm run client`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`

## 📊 API Endpoints

- `GET /api/posts` - Retrieve all presale posts
- `GET /api/posts/:slug` - Get specific presale by slug
- `GET /api/health` - Health check endpoint

## 💾 Data Management

Presale data is stored as JSON files in the `server/data/` directory. Each file represents a single presale with the following structure:

```json
{
  "title": "Token Name",
  "slug": "token-name",
  "symbol": "$TOKEN",
  "description": "Token description...",
  "affiliateLink": "https://presale-link.com",
  "raise": "$1,000,000",
  "apy": "50%",
  "status": "Live",
  "progress": 75,
  "date": "2025-08-06",
  "category": "DeFi",
  "participants": 5000
}
```

## 🎨 Customization

### Adding New Presales

1. Create a new JSON file in `server/data/`
2. Follow the data structure shown above
3. The API will automatically include the new presale

### Styling

- Modify `client/src/index.css` for global styles
- Update `client/tailwind.config.js` for Tailwind customization
- Edit component styles in individual React components

### SEO Configuration

- Update SEO metadata in `client/src/utils/seoSchema.js`
- Modify meta tags in `client/public/index.html`

## 🔧 Configuration

### Environment Variables

Create `.env` files in both client and server directories for environment-specific configuration:

**Server (.env)**:
```
PORT=5000
NODE_ENV=development
```

**Client (.env)**:
```
REACT_APP_API_URL=http://localhost:5000
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛡️ Security Features

- CORS enabled for cross-origin requests
- Input validation on API endpoints
- Secure affiliate link handling
- No sensitive data exposure

## 📈 Performance

- Lazy loading for optimal performance
- Optimized images and assets
- Efficient React component rendering
- Express.js static file serving

## 🚢 Deployment

### Heroku Deployment

1. Create a Heroku app
2. Set buildpacks:
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```
3. Deploy:
   ```bash
   git push heroku main
   ```

### Manual Deployment

1. Build the client:
   ```bash
   cd client && npm run build
   ```
2. Start the server:
   ```bash
   cd server && npm start
   ```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ for the crypto community**