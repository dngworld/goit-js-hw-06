// task 1

const categoriesAll = document.querySelector("#categories");
const categoriesLength = categoriesAll.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
