module.exports = {
  apps: [{
    name: "backend",
    script: "./start.cjs",
    interpreter: "node",
    watch: true,
    env: {
      NODE_ENV: "development",
      PORT: 8002,
      HOST: "0.0.0.0",
      SERVER_URL: "https://103.82.249.157:8002",
      ALLOWED_ORIGINS: "https://103.82.249.157,https://localhost:3000"
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 8002,
      HOST: "0.0.0.0",
      SERVER_URL: "https://103.82.249.157:8001",
      ALLOWED_ORIGINS: "https://103.82.249.157"
    }
  }]
}