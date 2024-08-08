import { Trash2 } from 'lucide-react'
import React from 'react'
import { DeleteRecord } from './DeleteRecords'

function RecordItem({ amount, comment }  ) {
	return (
		<div className='w-full text-xl font-extralight my-5 p-3 flex justify-between border-primary rounded-lg border'>
			<span className='font-light'>{amount}</span>
			<span className='italic font-'>{comment}</span>
			{/* <button>
				<Trash2 strokeWidth={'1.5px'} color='#f04343'/>
			</button> */}
			<DeleteRecord/>
		</div>
	)
}

export default RecordItem