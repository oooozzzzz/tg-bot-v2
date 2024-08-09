import axios from "axios";

export const ngrokHeaders = { "ngrok-skip-browser-warning": "69420" };

const URL = 'https://e540-62-118-92-35.ngrok-free.app'

export const getCategories = async (id) => {
	console.log('getCategories', id);
	const res = await axios.get(
		`${URL}/records?id=${id}`,
		{ headers: ngrokHeaders }
	);
	return res.data;
};

export const deleteRecordReq = async (recordId) => {
	const res = await axios.delete(
		`${URL}/records?id=${recordId}`,
		{ headers: ngrokHeaders }
	);
	return res.data;
}

export const useTelergam = () => {
	const tg = window?.Telegram?.WebApp;
	const user = tg?.initDataUnsafe?.user;
	return user;
};
