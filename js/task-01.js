const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const categoryCount = categoryItems.length;
console.log(`Number of categories: ${categoryCount}`);
    categoryItems.forEach((item) => {
      const categoryTitle = item.querySelector("h2").textContent;
      const categoryElements = item.querySelectorAll("ul li");
      const categoryElementCount = categoryElements.length;
      console.log(`Category: ${categoryTitle}`);
      console.log(`Elements: ${categoryElementCount}`);
    });