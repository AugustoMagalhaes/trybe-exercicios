const express = require('express');
const { Book, User } = require('./models');
require('dotenv').config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.get('/usersbooks/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findOne({
			where: { userId: id },
			include: [{ model: Book, as: 'books', through: { attributes: [] } }],
		});

		if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

		return res.status(200).json(user);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

app.listen(PORT, () => {
	console.log(`Ouvindo na porta ${PORT}`);
});
