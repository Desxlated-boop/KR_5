let recipes = [
  {
    id: 1,
    title: 'Спагетти Карбонара',
    ingredients: 'спагетти, яйца, бекон, сыр, сливки',
    instructions: 'Отварить спагетти. Обжарить бекон. Смешать яйца и сыр...'
  },
  {
    id: 2,
    title: 'Цезарь с курицей',
    ingredients: 'салат романо, курица, сухарики, сыр, соус цезарь',
    instructions: 'Запечь курицу, нарезать салат...'
  }
];

let nextId = 3;

function addRecipe(title, ingredients, instructions) {
  recipes.push({ id: nextId++, title, ingredients, instructions });
}

module.exports = { recipes, addRecipe };