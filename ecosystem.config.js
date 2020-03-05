module.exports = {
  apps: [
  {
  // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
  name: "personal-website",
  script: "server/index.js",
  exec_mode: "cluster",
  instances: "max",
  autorestart: true,
  watch: false,
  max_memory_restart: "3G",
  exp_backoff_restart_delay: 100,
  },
  ],
};