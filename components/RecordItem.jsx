import React from "react";
import { DeleteRecord } from "./DeleteRecords";
import moment from "moment";

function RecordItem({
	amount,
	comment,
	recordId,
	categoryId,
	deleteRecord,
	categoryLabel,
	createdAt,
}) {
	return (
		<div className="w-full bg-gray-500/10 text-xl font-extralight my-3 p-2 flex flex-col items-center border-gray-400/70 rounded-xl border">
			<div className="flex justify-between items-center w-full">
				<span className="font-light pl-3">{amount}</span>
				{categoryLabel ? (
					<span className="font-light text-base">{categoryLabel}</span>
				) : (
					<span className="italic font-">{comment}</span>
				)}

				<DeleteRecord
					deleteRecord={deleteRecord}
					recordId={recordId}
					categoryId={categoryId}
				/>
			</div>
			<div>
				{createdAt ? (
					<span className="font-light text-base">{createdAt}</span>
				) : null}
			</div>
		</div>
	);
}

export default RecordItem;
