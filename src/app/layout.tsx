import type { Metadata } from "next";
import Header from "@/components/header/header";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Header />
				<main className="container">{children}</main>
			</body>
		</html>
	);
}
