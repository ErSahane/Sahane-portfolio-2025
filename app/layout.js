import { Toaster } from 'sonner';
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/components/ThemeProvider";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const poppins = Poppins({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

const firaCode = Fira_Code({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
});

export const metadata = {
	title: "Sahane Alam",
	description: "My portfolio that showcases my skills.",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${poppins.variable} ${firaCode.variable}`}
		>
			<body className="antialiased">
				<ThemeProviders
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{/* ✅ Navbar and Page Content */}
					<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
						<Navbar />
						{children}
						<Footer />
					</main>

					{/* ✅ Global Toast Notification (Sonner) */}
					<Toaster position="top-center" richColors closeButton />
				</ThemeProviders>
			</body>
		</html>
	);
}
