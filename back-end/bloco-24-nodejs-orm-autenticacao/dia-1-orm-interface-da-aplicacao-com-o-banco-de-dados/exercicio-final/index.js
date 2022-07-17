require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const BookRouter = require('./routes/bookRouter');

app.use(express.json());

app.use('/books', BookRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
