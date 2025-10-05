"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignRight } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { motion, AnimatePresence } from "framer-motion";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
];

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = () => setIsOpen(false);

	const navbarVariants = {
		hidden: { y: -50, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	};

	const linkVariants = {
		initial: { opacity: 0, y: 10 },
		animate: { opacity: 1, y: 0 },
		hover: { scale: 1.1 },
	};

	const sheetVariants = {
		open: {
			x: 0,
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
		closed: {
			x: "100%",
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
	};

	return (
		<motion.nav
			className="w-full"
			initial="hidden"
			animate="visible"
			variants={navbarVariants}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between border rounded-full">
				{/* Logo */}
				<motion.h1
					className="text-primary font-bold text-2xl tracking-widest cursor-default select-none"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
				>
					<Link href={"/"}>Er. Sahane</Link>
				</motion.h1>

				{/* Desktop Nav */}
				<div className="hidden lg:flex gap-8">
					{navItems.map(({ href, label }, index) => (
						<motion.div
							key={href}
							initial="initial"
							animate="animate"
							whileHover="hover"
							variants={linkVariants}
							transition={{ delay: 0.3 + index * 0.1 }}
						>
							<Link
								href={href}
								className={`font-light transition ${
									pathname === href
										? "text-primary font-medium"
										: ""
								}`}
							>
								{label}
							</Link>
						</motion.div>
					))}
				</div>

				{/* Right Side */}
				<div className="flex items-center gap-4">
					<ModeToggle />

					{/* Mobile Nav */}
					<div className="lg:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger aria-label="Open menu">
								<motion.div
									whileTap={{ scale: 0.9 }}
									whileHover={{ rotate: 90, scale: 1.1 }}
									className="cursor-pointer"
								>
									<AlignRight className="h-6 w-6" />
								</motion.div>
							</SheetTrigger>
							<AnimatePresence>
								{isOpen && (
									<SheetContent
										side="right"
										as={motion.div}
										initial="closed"
										animate="open"
										exit="closed"
										variants={sheetVariants}
										className="overflow-auto"
									>
										<SheetHeader>
											<SheetTitle className="text-xl font-bold">
												Menu
											</SheetTitle>
											<SheetDescription>
												Select a page to navigate
											</SheetDescription>
										</SheetHeader>
										<div className="mt-10 flex flex-col gap-4 ml-3 ">
											{navItems.map(({ href, label }) => (
												<motion.div
													key={href}
													initial={{
														opacity: 0,
														x: 20,
													}}
													animate={{
														opacity: 1,
														x: 0,
													}}
													exit={{ opacity: 0, x: 20 }}
													transition={{
														duration: 0.2,
													}}
												>
													<Link
														href={href}
														onClick={
															handleLinkClick
														}
														className={`font-light transition hover:text-primary ${
															pathname === href
																? "text-primary font-medium"
																: ""
														}`}
													>
														{label}
													</Link>
												</motion.div>
											))}
										</div>
									</SheetContent>
								)}
							</AnimatePresence>
						</Sheet>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
