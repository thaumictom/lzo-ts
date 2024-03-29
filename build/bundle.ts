import { build } from 'esbuild';

const options: Parameters<typeof build>[0] = {
	bundle: true,
	entryPoints: ['src/index.ts'],
	external: ['lzo-ts'],
	mangleProps: /^_/,
	minify: true,
};

// Platform neutral
await build({
	...options,
	platform: 'neutral',
	outfile: 'dist/index.mjs',
});

// Platform node
await build({
	...options,
	platform: 'node',
	outfile: 'dist/index.js',
});

// Platform browser
await build({
	...options,
	globalName: 'lzoTs',
	platform: 'browser',
	outfile: 'dist/lzo.js',
});
