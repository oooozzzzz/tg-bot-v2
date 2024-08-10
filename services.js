import axios from "axios";

export const ngrokHeaders = { "ngrok-skip-browser-warning": "69420" };

const URL = 'https://008a-62-118-92-13.ngrok-free.app'

export const getCategories = async (id) => {
	console.log('getCategories', id);
	const res = await axios.get(
		`${URL}/records?id=${id}`,
		{ headers: ngrokHeaders }
	);
	return res.data;
};

export const getRecords = async (id) => {
	const res = await axios.get(
		`${URL}/records/by_date?id=${id}`,
		{ headers: ngrokHeaders }
	);
	return res.data;
}

export const deleteRecordReq = async (recordId) => {
	const res = await axios.delete(
		`${URL}/records?id=${recordId}`,
		{ headers: ngrokHeaders }
	);
	return res.data;
}

