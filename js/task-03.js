const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector(".gallery");
const galleryMarkup = images.map((image) =>`<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`).join("");
const galleryItemClass = "gallery-item";
const imageClass = "gallery-image";
const galleryStyles = document.createElement("style");
galleryStyles.innerHTML = `
  .${galleryItemClass} {
    margin: 10px;
  }
  
  .${imageClass} {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
document.head.appendChild(galleryStyles);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
