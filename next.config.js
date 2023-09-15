/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: process.env.HOST,
				port: process.env.PORT,
				pathname: "/",
			},
		],
	},
};

module.exports = nextConfig;
