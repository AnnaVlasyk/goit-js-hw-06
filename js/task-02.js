const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMenu = document.querySelector("#ingredients");

const createItems = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  console.log(element);
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
});
ingredientsMenu.append(...createItems);
