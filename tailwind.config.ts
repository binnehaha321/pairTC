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
				darkGray: "#D9D9D9",
				boldGray: "#969696",
				dark: "#002233",
				primary: "#FF8300",
			},
			borderWidth: {
				1: "1px",
				2: "2px",
				3: "3px",
				4: "4px",
				5: "5px",
			},
		},
	},
	plugins: [],
};
export default config;
