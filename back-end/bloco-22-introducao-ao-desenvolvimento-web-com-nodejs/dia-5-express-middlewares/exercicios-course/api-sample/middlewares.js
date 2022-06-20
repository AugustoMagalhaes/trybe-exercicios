function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || price < 0 || isNaN(price)) return res.status(400).json({ message: 'Invalid data!'});

  next();
};

module.exports = { validateName, validatePrice };