import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        // ...
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2
        }
      },

      // esbuild options, to transform jsx to js
      esbuildOptions: {
        // ...
      },

      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      include: '**/*.svg?react',

      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
      exclude: ''
    })
  ]
});
