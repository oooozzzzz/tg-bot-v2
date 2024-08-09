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
import NoRecords from "./NoRecords";
import Loading from "@/app/records/loading";

function Records() {
	const [categories, setCategories] = useState([]);
	const [id, setId] = useState(762569950);

	useEffect(() => {
		const user = useTelergam();
		setId(user?.id);

		if (id) {
			try {
				getCategories(id).then(setCategories);
			} catch (error) {}
		}
	}, []);
	return (
		<div className=" z-10 w-full font-light overflow-y-hidden items-center justify-between text-sm lg:flex">
			{categories.map((category) => {
				const deleteRecord = (id) => {
					deleteRecordReq(id).then((res) => {
						res
							? setCategories(
									category.records.filter((record) => record.id !== id)
							  )
							: null;
					});
				};
				return (
					<div className="w-full capitalize p-2 mt-5 border-b-2 last:border-0">
						<h2 className="flex items-center justify-center text-4xl font-light  border-white py-1">
							{category.label}
						</h2>
						<div>
							{category.records.map((record) => {
								return (
									<RecordItem
										key={record.id}
										amount={record.amount}
										id={record.id}
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
	);
}

export default Records;
