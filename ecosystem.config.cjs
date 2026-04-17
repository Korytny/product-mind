module.exports = {
  apps: [
    {
      name: "product-mind-frontend",
      script: "npm",
      args: "run dev",
      cwd: "/home/deployer/projects/product-mind",
      interpreter: "none",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 3000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    },
    {
      name: "product-mind-backend",
      script: "./start.cjs",
      cwd: "/home/deployer/projects/product-mind/backend",
      interpreter: "node",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 8002,
        HOST: "0.0.0.0",
        SERVER_URL: "http://localhost:8002",
        ALLOWED_ORIGINS: "http://localhost:3000,http://localhost:5173"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 8002,
        HOST: "0.0.0.0",
        SERVER_URL: "http://localhost:8002",
        ALLOWED_ORIGINS: "*"
      }
    }
  ]
}
