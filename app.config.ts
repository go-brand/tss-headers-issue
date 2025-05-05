import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import { cloudflare } from 'unenv';

// import basicSsl from '@vitejs/plugin-basic-ssl';
import nitroCloudflareBindings from 'nitro-cloudflare-dev';

export default defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  server: {
    preset: 'cloudflare-module',
    unenv: cloudflare,
    modules: [nitroCloudflareBindings],
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});
