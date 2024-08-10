import React from "react";
import { DeleteRecord } from "./DeleteRecords";

function RecordItem({
	amount,
	comment,
	recordId,
	categoryId,
	deleteRecord,
	categoryLabel,
}) {
	return (
		<div className="w-full bg-gray-500/10 text-xl font-extralight my-3 p-2 flex justify-between items-center border-gray-400/70 rounded-xl border">
			<span className="font-light pl-3">{amount}</span>
			{categoryLabel ? (
				<span className="font-light ">{categoryLabel}</span>
			) : (
				<span className="italic font-">{comment}</span>
			)}
			<DeleteRecord
				deleteRecord={deleteRecord}
				recordId={recordId}
				categoryId={categoryId}
			/>
		</div>
	);
}

export default RecordItem;
