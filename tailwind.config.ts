import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				pairTC: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			},
			borderRadius: {
				5: "5px",
				10: "10px",
				15: "15px",
				20: "20px",
				25: "25px",
			},
			colors: {
				gray: "#F6F6F6",
			},
			backgroundImage: {},
		},
	},
	plugins: [],
};
export default config;
