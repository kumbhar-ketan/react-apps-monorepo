/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {resolve} from 'path';

const watchFolders = [__dirname, resolve(__dirname, '../../node_modules')];

export default {
  projectRoot: resolve(__dirname, '../../'),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders,
};
