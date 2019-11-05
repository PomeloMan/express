/**
 * @reference https://pm2.keymetrics.io/docs/usage/environment/
 * pm2 start pm2.config.js --env prod
 * pm2 kill 清空管理进程池
 */
module.exports = {
  apps: [
    {
      name: "express", // app name in pm2
      script: "./bin/www",
      watch: true,
      instances: 2, // 启动实例
      exec_mode: "cluster", // 多服务模式
      increment_var: 'PORT', // 一个实例对应一个端口，端口自增
      env: {
        "PORT": 3000,
        "NODE_ENV": "development"
      },
      env_prod: {
        "PORT": 80,
        "NODE_ENV": "production",
      }
    }
  ]
}