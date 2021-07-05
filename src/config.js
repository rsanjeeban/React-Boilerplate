const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.REACT_APP_ENV || 'development',
    isDev: process.env.REACT_APP_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: process.env.BACKEND_BASE || "http://localhost:3000/api/",
  },
  development: {
    logApi: process.env.ERROR_LOG_API
  },
  production: {
    logApi: 'https://nallai.com/api/sendlog/'
  },
}

module.exports = merge(config.all, config[config.all.env])
