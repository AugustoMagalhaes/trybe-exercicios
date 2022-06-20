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

/* auth-middleware.js */
const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blank!' });
  }

  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

module.exports = authMiddleware;

module.exports = { validateName, validatePrice, authMiddleware };