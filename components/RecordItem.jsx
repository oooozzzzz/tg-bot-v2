import { Trash2 } from 'lucide-react'
import React from 'react'
import { DeleteRecord } from './DeleteRecords'

function RecordItem({ amount, comment }  ) {
	return (
		<div className='w-full text-xl font-extralight my-5 p-3 flex justify-between items-center border-primary rounded-lg border'>
			<span className='font-light ml-3'>{amount}</span>
			<span className='italic font-'>{comment}</span>
			<DeleteRecord/>
		</div>
	)
}

export default RecordItem