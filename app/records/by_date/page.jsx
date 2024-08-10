"use client";
import RecordItem from "@/components/RecordItem";
import { deleteRecordReq, getRecords } from "@/services";
import React, { useState, useEffect } from "react";

function ByDate() {
	const [records, setRecords] = useState([]);

	const deleteRecord = ({ recordId}) => {
		deleteRecordReq(recordId).then(() => {
			let newRecords = structuredClone(records);
			newRecords = newRecords.filter((record) => record.id!== recordId);
			console.log(newRecords);
			setRecords(newRecords);
		});
	};

	useEffect(() => {
		// const tg = window.Telegram.WebApp;
		// const user = tg.initDataUnsafe?.user;

		//TODO: change 762569950 to your user.id before commit
		getRecords(762569950).then(setRecords);
	}, []);
	return (
		<div className="pt-3">
			{records.map((record) => {
				return (
					<RecordItem
						key={record.id}
						amount={record.amount}
						recordId={record.id}
						categoryLabel={record.categoryLabel}
						categoryId={record.categoryId}
						deleteRecord={deleteRecord}
					/>
				);
			})}
		</div>
	);
}

export default ByDate;
