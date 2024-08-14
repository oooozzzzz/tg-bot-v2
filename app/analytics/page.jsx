"use client";
import PieChart from "@/components/PieChart";
import { getCategories, getRecords, makeData } from "@/services";
import Script from "next/script";
import React, { useEffect, useState } from "react";

function Analytics() {
	const [records, setRecords] = useState([]);


	useEffect(() => {
		const tg = window.Telegram.WebApp;
		const user = tg.initDataUnsafe?.user;
		getRecords(user?.id).then(setRecords);
	}, []);
	return (
		<>
			<Script
				src="https://telegram.org/js/telegram-web-app.js"
				strategy="beforeInteractive"
			/>
			<PieChart records={records} />
		</>
	);
}

export default Analytics;
