import axios from "axios";

export const ngrokHeaders = { "ngrok-skip-browser-warning": "69420" };

const URL = "https://bf0a-31-173-83-204.ngrok-free.app";
export const getCategories = async (id) => {
	console.log("getCategories", id);
	const res = await axios.get(`${URL}/records?id=${id}`, {
		headers: ngrokHeaders,
	});
	return res.data;
};

export const getRecords = async (id) => {
	const res = await axios.get(`${URL}/records/by_date?id=${id}`, {
		headers: ngrokHeaders,
	});
	return res.data;
};

export const deleteRecordReq = async (recordId) => {
	const res = await axios.delete(`${URL}/records?id=${recordId}`, {
		headers: ngrokHeaders,
	});
	return res.data;
};

export const makePieData = (records) => {
	let data = {};

	records.forEach((record) => {
		if (!data[record.categoryLabel]) {
			data[record.categoryLabel] = [];
		}
		data[record.categoryLabel].push(record.amount);
	});

	for (let category in data) {
		data[category] = data[category].reduce((acc, curr) => acc + curr, 0);
	}

	let labels = [];
	let fields = [];

	for (let category in data) {
		labels.push(category);
		fields.push(data[category]);
	}

	const result = {
		labels: labels,
		datasets: [
			{
				label: "",
				backgroundColor: [
					"rgba(74, 209, 209, 0.888)",
					"rgba(74, 209, 209, 1",
					"rgba(74, 209, 209, 1",
					"rgba(74, 209, 209, 1",
					"rgba(74, 209, 209, 1",
				],
				borderColor: "rgba(0, 0, 0, 0.574)",
				data: fields,
				hoverOffset: 6,
			},
		],
	};
	let sum = 0
	return { data: result, sum};
};
