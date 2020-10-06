module.exports = {
    apps: [
      {
        name: 'amigos-mema',
        script: './src/index.js',
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };