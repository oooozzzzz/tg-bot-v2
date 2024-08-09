"use client";

import {
	data,
	deleteRecordReq,
	getCategories,
	params,
	useTelergam,
} from "@/services";
import RecordItem from "./RecordItem";
import { useEffect, useState } from "react";
import Script from "next/script";

function Records() {
	const [categories, setCategories] = useState([]);
	const [id, setId] = useState();

	const deleteRecord = ({ recordId, categoryId }) => {
		console.log("Record id ", recordId, "Category Id", categoryId);
		deleteRecordReq(recordId).then(() => {
			let newCategories = structuredClone(categories);
			newCategories.forEach((category) => {
				if (category.id === categoryId) {
					category.records = category.records.filter(
						(record) => record.id !== recordId
					);
				}
			});
			console.log(newCategories);
			setCategories(newCategories);
		});
	};
	useEffect(() => {
		const user = useTelergam();
		setId(user?.id);

		if (id) {
			try {
				getCategories(id).then(setCategories);
			} catch (error) {}
		}
	}, [categories]);
	return (
		<>
			<Script
				src="https://telegram.org/js/telegram-web-app.js"
				strategy="beforeInteractive"
			/>
			<div className=" z-10 w-full font-light overflow-y-hidden items-center justify-between text-sm lg:flex">
				{categories.map((category) => {
					return (
						<div className="w-full capitalize p-2 mt-5 border-b-2 last:border-0">
							<h2 className="flex items-center justify-center text-4xl font-light  border-white py-1">
								{category.label}
							</h2>
							<div>
								{category?.records?.map((record) => {
									return (
										<RecordItem
											key={record.id}
											amount={record.amount}
											recordId={record.id}
											categoryId={record.categoryId}
											deleteRecord={deleteRecord}
										/>
									);
								})}
								{!category.records.length ? (
									<div className="text-lg normal-case my-5 ">Нет записей</div>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Records;
