// /** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: process.env.NEXT_PUBLIC_HOST,
				port: process.env.NEXT_PUBLIC_PORT,
			},
			{
				protocol: "https",
				hostname: "i.ytimg.com",
			},
		],
	},
};

module.exports = nextConfig;
