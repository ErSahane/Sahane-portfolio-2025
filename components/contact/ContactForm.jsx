"use client";

import { useState, useEffect } from "react";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isVisible, setIsVisible] = useState(false);
	const [status, setStatus] = useState(""); // new state to show success/error message

	useEffect(() => {
		// Trigger animation on mount
		setIsVisible(true);
	}, []);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// ✅ Backend API call
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			if (res.ok && data.success) {
				setStatus("success");
				alert("✅ Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
				alert("❌ Failed to send message, please try again!");
			}
		} catch (error) {
			console.error("Error:", error);
			setStatus("error");
			alert("⚠️ Server error, please try again later!");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`w-full max-w-2xl mx-auto space-y-6 transition-opacity duration-700 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			{/* Name Field */}
			<div className="group">
				<label className="flex items-center gap-2 text-sm font-medium mb-1 group-focus-within:text-primary transition">
					<FiUser /> Name
				</label>
				<Input
					className="text-sm mb-2 transition-shadow duration-300 ease-in-out focus:shadow-md focus:outline-none"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="Your name"
				/>
			</div>

			{/* Email Field */}
			<div className="group">
				<label className="flex items-center gap-2 text-sm font-medium mb-1 group-focus-within:text-primary transition">
					<FiMail /> Email
				</label>
				<Input
					className="text-sm mb-2 transition-shadow duration-300 ease-in-out focus:shadow-md focus:outline-none"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					required
					placeholder="you@example.com"
				/>
			</div>

			{/* Message Field */}
			<div className="group">
				<label className="flex items-center gap-2 text-sm font-medium mb-1 group-focus-within:text-primary transition">
					<FiMessageCircle /> Message
				</label>
				<Textarea
					className="text-sm mb-2 transition-shadow duration-300 ease-in-out focus:shadow-md focus:outline-none"
					name="message"
					rows={5}
					value={formData.message}
					onChange={handleChange}
					required
					placeholder="Write your message here..."
				/>
			</div>

			<Button
				type="submit"
				className="transition-transform hover:scale-105 duration-300 ease-in-out"
				disabled={status === "sending"}
			>
				{status === "sending" ? "Sending..." : "Send Message"}
			</Button>

			{/* Status message */}
			{status === "success" && (
				<p className="text-green-600 text-center">Your message has been sent successfully!</p>
			)}
			{status === "error" && (
				<p className="text-red-600 text-center">Something went wrong. Please try again.</p>
			)}
		</form>
	);
}
