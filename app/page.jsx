"use client"
import Script from "next/script";
import { useState } from "react";
export default function Home() {
	return (
		<>
			<Script
				src="https://telegram.org/js/telegram-web-app.js"
				strategy="beforeInteractive"
			/>
		</>
	);
}
