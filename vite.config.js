import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '',
	server: {
		fs: {
			allow: ['.', 'dist']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: [
					'import',
					'if-function',
					'global-builtin',
					'color-functions'
				]
			}
		}
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		cssCodeSplit: false,
		cssMinify: false,
		lib: {
			entry: {
				index: path.resolve(__dirname, 'src/index.js'),
				'theme-switcher': path.resolve(__dirname, 'src/theme-switcher.js')
			},
			formats: ['es'],
		},
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				assetFileNames: (assetInfo) => {
					return assetInfo.name?.endsWith('.css') ? 'dashboard.css' : 'assets/[name].[ext]';
				}
			}
		}
	}
});
