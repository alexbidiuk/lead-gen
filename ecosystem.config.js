module.exports = {
  apps: [
    {
      name: "bot-app",
      script: "./index.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
