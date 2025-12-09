const { recipes, addRecipe, updateRecipe, deleteRecipe, clearRecipes } = require('../data/recipes');

exports.getAll = (req, res) => {
  const { category } = req.query; // Работа с req.query
  let filtered = recipes;
  if (category) {
    filtered = recipes.filter(r => r.category && r.category.toLowerCase() === category.toLowerCase());
  }
  res.json(filtered);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id); // Работа с req.params
  const recipe = recipes.find(r => r.id === id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: 'Рецепт не найден' });
  }
};

exports.add = (req, res) => {
  const { title, ingredients, instructions, category } = req.body; // Обработка тела
  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: 'Заполни все поля!' });
  }
  addRecipe(title, ingredients, instructions, category);
  res.redirect('/');  // Теперь перенаправляем на главную вместо JSON
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = updateRecipe(id, req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: 'Рецепт не найден' });
  }
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  const success = deleteRecipe(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Рецепт не найден' });
  }
};

exports.clear = (req, res) => {
  clearRecipes();
  res.json({ message: 'Все рецепты очищены!' });
};