import axios from "axios";

export const data = [
	{
		id: "1a1f0952-a094-4f23-8a62-92907d5c628a",
		label: "квартира",
		authorId: "762569950",
		records: [
			{
				id: "ba74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
			{
				id: "bc74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
			{
				id: "bd74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
			{
				id: "ba74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
		],
	},
	{
		id: "1a1f0952-a094-4f23-8a62-92907d5c628a",
		label: "продукты",
		authorId: "762569950",
		records: [
			{
				id: "ba74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
			{
				id: "bc74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
			{
				id: "bd74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
			{
				id: "ba74a10e-a27d-4818-8342-b3cfaf8dd9f5",
				categoryId: "1a1f0952-a094-4f23-8a62-92907d5c628a",
				createdAt: "2024-08-05T18:14:09.074Z",
				amount: 300,
				authorId: "762569950",
			},
		],
	},
	{
		id: "36e0c68c-385a-4b1b-8c64-58cc0a73f7f2",
		label: "здоровье",
		authorId: "762569950",
		records: [
			{
				id: "36ae48e1-7ac6-4570-925c-c5dc5aa4bec8",
				categoryId: "36e0c68c-385a-4b1b-8c64-58cc0a73f7f2",
				createdAt: "2024-08-05T11:41:13.701Z",
				amount: 23,
				authorId: "762569950",
			},
			{
				id: "4e06f00e-27ac-4ce2-aaec-87ab3270eb04",
				categoryId: "36e0c68c-385a-4b1b-8c64-58cc0a73f7f2",
				createdAt: "2024-08-05T11:53:27.528Z",
				amount: 123,
				authorId: "762569950",
			},
			{
				id: "bdbef68e-cd2c-431d-aa56-caf7a1693129",
				categoryId: "36e0c68c-385a-4b1b-8c64-58cc0a73f7f2",
				createdAt: "2024-08-05T18:12:05.964Z",
				amount: 34,
				authorId: "762569950",
			},
			{
				id: "066be4e2-46cf-4c25-bf60-ed0c3e38411a",
				categoryId: "36e0c68c-385a-4b1b-8c64-58cc0a73f7f2",
				createdAt: "2024-08-05T18:12:50.802Z",
				amount: 12,
				authorId: "762569950",
			},
		],
	},
];

export const params = {
	headers: { "ngrok-skip-browser-warning": "69420" },
};

export const getCategories = async (id) => {
	const res = await axios.get(
		`https://e540-62-118-92-35.ngrok-free.app/records?id=${id}`,
		params
	);
	return res.data;
};

export const useTelergam = () => {
	const tg = window?.Telegram?.WebApp;
	const user = tg?.initDataUnsafe?.user;
	return user;
};
