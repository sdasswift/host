const { dependencies } = require('./package.json');

module.exports = {
  name: 'app1',
  remotes: {
    app2: `app2@http://localhost:3001/remoteEntry.js`,
    app3: `app3@http://localhost:3002/remoteEntry.js`,
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
    'react-router-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-router-dom'],
    },
    'jotai': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['jotai'],
    },
    '@mui/material': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@mui/material'],
    },
    '@emotion/react': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@emotion/react'],
    },
    '@emotion/styled': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@emotion/styled'],
    },
  },
};