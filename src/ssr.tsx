/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
  getHeaders,
} from '@tanstack/react-start/server';
import { getRouterManifest } from '@tanstack/react-start/router-manifest';

import { createRouter } from './router';

export default createStartHandler({
  createRouter: () => {
    const headers = getHeaders();
    console.log('_______________________ headers', headers);
    return createRouter();
  },
  getRouterManifest,
})(defaultStreamHandler);
