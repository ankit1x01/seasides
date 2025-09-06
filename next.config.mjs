/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'seasides.net',
				pathname: '/wp-content/**',
			},
		],
	},
};

export default nextConfig;
