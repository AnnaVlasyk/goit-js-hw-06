const menuItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItem.length}`);
menuItem.forEach((item) => {
  const category = item.firstElementChild;
  const elementCategory = item.lastElementChild.children.length;
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elementCategory}`);
});