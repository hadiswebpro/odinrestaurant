import contact from "./images/contact.webp";

export function loadContact() {


    const content = document.getElementById("content");

    const heading = document.createElement("h2");
    heading.textContent = "contactii";

    const container = document.createElement("div");

    const dataContainer = document.createElement("div");
    container.appendChild(dataContainer);

    const span = document.createElement("span");
    span.textContent = "Siamo felici di sentirti!";
    dataContainer.appendChild(span);

    const address = document.createElement("address");
    address.textContent = "Via Roma 25, Milano";
    dataContainer.appendChild(address);

    const phone = document.createElement("a");
    phone.href = "tel:+390212345678";
    phone.textContent = "+390212345678";
    dataContainer.appendChild(phone);

    const email = document.createElement("a");
    email.href = "mailto:bellatavola@example.com";
    email.textContent = "bellatavola@example.com";
    dataContainer.appendChild(email);


    const imgContainer = document.createElement("img");
    imgContainer.src = contact;
    imgContainer.alt = "Interno del ristorante Bella Tavola";

    container.appendChild(imgContainer);
    content.appendChild(heading);
    content.appendChild(container);
    
}
