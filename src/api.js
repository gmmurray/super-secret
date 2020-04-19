import axios from 'axios';

const URL = 'https://api.random.org/json-rpc/2/invoke';

const requestBody = (length, characters, replacement) => {
	return {
		jsonrpc: '2.0',
		method: 'generateStrings',
		params: {
			apiKey: process.env.REACT_APP_RANDOM_API_KEY,
			n: 1,
			length,
			characters,
			replacement,
		},
		id: '24',
	};
};

export const getRandomString = async ({ length, characters, replacement }) => {
	let result;
	try {
		result = await axios.post(URL, requestBody(length, characters, replacement));
	} catch (error) {
		result = undefined;
	}
	return result;
};
