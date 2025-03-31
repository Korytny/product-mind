module.exports = {
  apps: [{
    name: "backend",
    script: "./start.cjs",
    interpreter: "node",
    watch: true,
    env: {
      NODE_ENV: "development",
      PORT: 8001,  // Измените на нужный порт
      HOST: "0.0.0.0"
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 8001,  // Должен совпадать с development
      HOST: "0.0.0.0"
    }
  }]
}