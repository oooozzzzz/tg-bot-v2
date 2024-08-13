import React from "react";
import { DeleteRecord } from "./DeleteRecords";

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
		<div className="w-full bg-gray-500/10 text-xl font-extralight my-3 p-1 flex flex-col items-center border-gray-400/70 rounded-xl border">
			<div className="flex justify-between items-center w-full">
				<span className="font-light text-base pl-2">{amount}</span>
				{categoryLabel ? (
					<span className="font-light text-base">{categoryLabel}</span>
				) : (
					comment && (
						<div className="mx-3 flex items-center justify-center w-full text-base border rounded-md bg-gray-400/20">
							<span className="p-1 text-sm normal-case">{comment}</span>
						</div>
					)
				)}

				<DeleteRecord
					deleteRecord={deleteRecord}
					recordId={recordId}
					categoryId={categoryId}
				/>
			</div>
			<div className="flex w-full justify-start ml-5">
				{createdAt ? (
					<span className="font-light text-base">{createdAt}</span>
				) : null}
				{categoryLabel && comment && (
					<div className="mx-7 flex items-center justify-center w-full text-base border rounded-md bg-gray-400/20">
						<span className="p-1 text-sm">{comment}</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default RecordItem;
