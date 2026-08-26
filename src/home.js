import img from "./images/main.webp";
import img1 from "./images/food1.webp";
import img2 from "./images/food2.webp";
import img3 from "./images/food3.webp";
import img4 from "./images/food4.webp";
import img5 from "./images/food5.webp";
import img6 from "./images/food6.webp";

export function loadHome() {
    const content = document.getElementById("content");

    const hero = document.createElement("div");
    hero.className = "hero";

    const container = document.createElement("div");
    container.className = "hero-container";

    const heading = document.createElement("h2");
    heading.textContent = "Benvenuti da Bella Tavola";

    const paragraph = document.createElement("p");
    paragraph.textContent = "La cucina italiana, preparata con passione e ingredienti freschi.";

    container.appendChild(heading);
    container.appendChild(paragraph);

    const image = document.createElement("img");
    image.src = img;
    image.alt = "Piatto della cucina italiana";

    hero.appendChild(container);
    hero.appendChild(image);

    const gallery = document.createElement("section");
    gallery.className = "gallery";

    const galleryHeading = document.createElement("h3");
    galleryHeading.textContent = "La nostra cucina";
    gallery.appendChild(galleryHeading);

    const galleryContainer = document.createElement("div");
    galleryContainer.className = "gallery-container";

    const galleryImages = [img1, img2, img3, img4, img5, img6];

    galleryImages.forEach((imageSource) => {
        const image = document.createElement("img");
        image.src = imageSource;
        image.alt = "Piatto della cucina italiana";
        galleryContainer.appendChild(image);
    });

    gallery.appendChild(galleryContainer);

    content.appendChild(hero);
    content.appendChild(gallery);
}
