const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const ingredientsListEl = [];
function createElement(arr){
  arr.map((item) => {
    const  listLi = document.createElement("li");
    listLi.classList.add("item");
    listLi.textContent = item;
    ingredientsListEl.push(listLi)
  })
  .join("")
  ingredientsList.append(...ingredientsListEl);
}
createElement(ingredients);
