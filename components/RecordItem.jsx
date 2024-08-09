import React from 'react'
import { DeleteRecord } from './DeleteRecords'

function RecordItem({ amount, comment, id, deleteRecord }  ) {
	return (
		<div className='w-full bg-gray-600/10 text-xl font-extralight my-3 p-2 flex justify-between items-center border-gray-400 rounded-xl border'>
			<span className='font-light ml-3'>{amount}</span>
			<span className='italic font-'>{comment}</span>
			<DeleteRecord deleteRecord={deleteRecord} id={id}/>
		</div>
	)
}

export default RecordItem