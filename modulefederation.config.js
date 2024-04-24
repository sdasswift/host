const { dependencies } = require('./package.json');

module.exports = {
  name: 'app1',
  remotes: {
    app2: `app2@http://localhost:3001/remoteEntry.js`,
    common: `common@http://localhost:3004/remoteEntry.js`,
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-dom'],
    },
    'jotai': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['jotai'],
    },
  },
};