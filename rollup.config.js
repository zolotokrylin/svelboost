import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import analyze from 'rollup-plugin-analyzer';
import autoPreprocess from 'svelte-preprocess';
import bundleSize from 'rollup-plugin-bundle-size';
import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const { name } = pkg;
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default [
	{
		input: 'src/index.js',
		output: [
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true,
				name,
				inlineDynamicImports: true,
				globals: {
					'web3': 'Web3',
					'universal-cookie': 'Cookies',
					'@walletconnect/utils/dist/cjs': 'cjs'
				}
			},
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
				name,
				inlineDynamicImports: true,
				globals: {
					'web3': 'Web3',
					'universal-cookie': 'Cookies',
					'@walletconnect/utils/dist/cjs': 'cjs'
				}
			}
		],
		context: 'this',
		external,
		plugins: [
			svelte({
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production,
					// generate: production ? 'dom' : 'ssr',
					hydratable: true,
				},
				preprocess: autoPreprocess({
					replace: [[/<template(.+)\/>/gim, '<template$1></template>']],
					pug: true,
					preserve: ['ld+json'],
					sass: {
						includePaths: ['src'],
					},
					postcss: {
						plugins: [require('autoprefixer')],
					},
					sourceMap: !production
				}),
				emitCss: false
			}),
			resolve({
				preferBuiltins: false
			}),
			json(),
			commonjs(),
			typescript(),
			url(),
			production && terser(),
			production && analyze(),
			production && bundleSize()
		],
		watch: {
			clearScreen: false
		}
	}
];
