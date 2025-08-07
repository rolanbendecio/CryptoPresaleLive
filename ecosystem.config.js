module.exports = {
  apps: [
    {
      name: 'crypto-presales-webapp',
      script: 'npm',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000
      },
      // Restart configuration
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
      restart_delay: 1000,
      max_restarts: 10,
      min_uptime: '10s',
      
      // Logging
      log_file: 'logs/app.log',
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Performance
      max_memory_restart: '1G',
      
      // Health monitoring
      kill_timeout: 5000,
      listen_timeout: 3000,
      
      // Environment-specific settings for RunCloud
      cwd: '/home/runcloud/webapps/your-app-name',
      user: 'runcloud',
      
      // Auto-restart on file changes in production (disable for production)
      watch_delay: 1000,
      
      // Graceful shutdown
      kill_retry_time: 100,
    }
  ],
  
  // Deployment configuration (optional)
  deploy: {
    production: {
      user: 'runcloud',
      host: 'your-server-ip',
      ref: 'origin/main',
      repo: 'your-git-repo-url',
      path: '/home/runcloud/webapps/your-app-name',
      'post-deploy': 'npm run install-all && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'apt-get install git -y'
    }
  }
};