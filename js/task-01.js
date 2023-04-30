const itemElement = document.querySelectorAll('.item');
console.log(`Number of categories: ${ itemElement.length }`);

itemElement.forEach((item) => {
    const categories = item.firstElementChild;
    console.log(`Category: ${categories.textContent}`);
    const categoriesElement = item.lastElementChild.children.length;
    console.log(`Elements: ${categoriesElement}`);
})