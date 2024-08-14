"use client";

import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { makePieData } from "@/services";

ChartJS.register(ArcElement, Tooltip, Legend);
function PieChart({ records }) {


	const {data} = makePieData(records);



	const options = {};

	return (
		<div className="flex items-center justify-center border-gray-500/50 border rounded-xl bg-gray-600/10 p-3 size-[350px]">
			<Pie data={data} options={options} />
		</div>
	);
}

export default PieChart;
