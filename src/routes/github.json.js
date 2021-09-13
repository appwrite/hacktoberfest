export const get = async (request) => {
	return {
		headers: {
			'Cache-Control': 's-maxage=86400'
		},
		body: {
			test: '123',
			time: Date.now()
		}
	};
};
