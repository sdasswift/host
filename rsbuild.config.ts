import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import mfConfig from './modulefederation.config';
import path from 'path';

export default defineConfig({
  dev: {
    liveReload: true,
    watchFiles: {
      paths: [
        path.resolve(__dirname, '..', 'remote'),
        path.resolve(__dirname, '..', 'common'),
      ]
    },
  },
  server: {
    port: 3000,
  },
  moduleFederation: { options: mfConfig },
  plugins: [
    pluginReact(),
  ],
});
