const BookServices = require('../services/book');

const getAll = async (_req, res) => {
	let error, httpStatus, payload;
	try {
		const books = await BookServices.getAll();
		({ error, httpStatus, payload } = books);

		if (error) throw new Error(error.message, httpStatus);

		return res.status(httpStatus).json(payload);
	} catch (err) {
		return res.status(httpStatus).json(err);
	}
};

module.exports = { getAll };
