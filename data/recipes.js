let recipes = [
  {
    id: 1,
    title: 'Спагетти Карбонара',
    ingredients: 'спагетти, яйца, бекон, сыр, сливки',
    instructions: 'Отварить спагетти. Обжарить бекон. Смешать яйца и сыр...',
    category: 'Итальянская'
  },
  {
    id: 2,
    title: 'Цезарь с курицей',
    ingredients: 'салат романо, курица, сухарики, сыр, соус цезарь',
    instructions: 'Запечь курицу, нарезать салат...',
    category: 'Салаты'
  }
];

let nextId = 3;

function addRecipe(title, ingredients, instructions, category) {
  const newRecipe = { id: nextId++, title, ingredients, instructions, category };
  recipes.push(newRecipe);
  return newRecipe;
}

function updateRecipe(id, updates) {
  const recipe = recipes.find(r => r.id === id);
  if (recipe) {
    Object.assign(recipe, updates);
    return recipe;
  }
  return null;
}

function deleteRecipe(id) {
  const index = recipes.findIndex(r => r.id === id);
  if (index !== -1) {
    recipes.splice(index, 1);
    return true;
  }
  return false;
}

function clearRecipes() {
  recipes = [];
  nextId = 1;
}

module.exports = { recipes, addRecipe, updateRecipe, deleteRecipe, clearRecipes };