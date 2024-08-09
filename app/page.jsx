import Script from "next/script";

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
