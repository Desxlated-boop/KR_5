const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware для парсинга тела
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Собственный middleware (логгер)
app.use(require('./middleware/logger'));

// Раздача статических файлов
app.use(express.static('public'));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Подключение роутов для API
app.use('/api/recipes', require('./routes/recipes'));

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});