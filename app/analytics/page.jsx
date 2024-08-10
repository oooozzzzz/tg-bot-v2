"use client"
import Script from 'next/script'
import React from 'react'

function Analytics() {
	return (
		<>
			<Script
				src="https://telegram.org/js/telegram-web-app.js"
				strategy="beforeInteractive"
			/>
		<div>Analytics</div>
		</>
	)
}

export default Analytics