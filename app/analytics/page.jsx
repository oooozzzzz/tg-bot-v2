"use client"
import { getRecords } from '@/services';
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

function Analytics() {
	// const [categories, setCategories] = useState([]);

	// 	{category?.records?.map((record) => {
	// 								return (
	// 									<RecordItem
	// 										key={record.id}
	// 										amount={record.amount}
	// 										recordId={record.id}
	// 										categoryId={record.categoryId}
	// 										deleteRecord={deleteRecord}
	// 									/>
	// 								);
	// 							})}


	// useEffect(() => {
	// 	const tg = window.Telegram.WebApp;
	// 	const user = tg.initDataUnsafe?.user;
		
	// 	getRecords(762569950).then(setCategories);
	// }, []);
	return (
		<>
			<Script
				src="https://telegram.org/js/telegram-web-app.js"
				strategy="beforeInteractive"
			/>
		<h2 className='py-2 font-light'>В разработке..</h2>
		</>
	)
}

export default Analytics