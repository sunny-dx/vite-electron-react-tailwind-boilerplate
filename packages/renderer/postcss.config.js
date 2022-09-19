module.exports = {
	plugins: {
		tailwindcss: {
			config: './packages/renderer/tailwind.config.js',
		},
		...(process.env.NODE_ENV === 'production' && {
			tailwindcss: {
				config: './tailwind.config.js',
			},
		}),
		autoprefixer: {},
	},
};
