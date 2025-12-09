const express = require('express');
const path = require('path');
const { recipes, addRecipe } = require('./data/recipes');

const app = express();
const PORT = 3000;

// Middleware (всё, что просит задание)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Наш собственный middleware — логирует каждый запрос
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} → ${req.method} ${req.originalUrl}`);
  next();
});

// Раздаём все файлы из папки public (HTML, CSS, картинки)
app.use(express.static('public'));

// Главная страница + передаём рецепты в шаблон (просто через JSON в скрипт)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API: получить все рецепты (для динамической подгрузки, если захочешь)
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// API: добавить рецепт (через форму)
app.post('/api/recipes', (req, res) => {
  const { title, ingredients, instructions } = req.body;
  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: 'Заполни все поля!' });
  }
  addRecipe(title, ingredients, instructions);
  res.redirect('/'); // возвращаемся на главную
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});