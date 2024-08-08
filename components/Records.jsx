"use client";

import { data } from "@/services";
import RecordItem from "./RecordItem";
import { useEffect, useState } from "react";
import axios from "axios";

function Records() {
	const [categories, setCategories] = useState([]);
	const [id, setId] = useState(762569950);

	useEffect(() => {
		// axios
			// .get(`https://5b6e-62-118-92-74.ngrok-free.app/records?id=762569950`)
			// .then((res) => setCategories(res.data));
		setCategories(data);
	}, []);
	return (
		<div className=" z-10 w-full items-center justify-between text-sm lg:flex">
			{categories.map((category) => {
				return (
					<div className="w-full capitalize p-2 mt-5 border-b-2 last:border-0">
						<h2 className="flex items-center justify-center text-4xl font-light  border-white py-1">{category.label}</h2>
						<div>
							{category.records.map((record) => (
								<RecordItem key={record.id} amount={record.amount} />
							))}
						</div>
					</div>
				);
			})}
		
		</div>
	);
}

export default Records;
