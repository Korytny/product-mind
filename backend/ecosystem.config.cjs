module.exports = {
  apps: [{
    name: "backend",
    script: "./start.cjs",
    interpreter: "node",
    watch: true,
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
}