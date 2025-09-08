/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['seasides.net'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'seasides.net',
				port: '',
				pathname: '/**',
			},
		],
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
