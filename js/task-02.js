const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const menu = document.querySelector('#ingredients');

const createListMenu = ingredients.map((ingredient) => {
  const listMenu = document.createElement('li');
  listMenu.textContent = ingredient;
  listMenu.classList.add('item');
  console.log(listMenu);
  return listMenu;

})

menu.append(...createListMenu);