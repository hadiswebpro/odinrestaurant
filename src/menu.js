export function loadMenu() {



    const categories = [

    {
        title: "Antipasti",
        items: [
            "Bruschetta al Pomodoro — €7",
            "Insalata Caprese — €8",
            "Arancini Siciliani — €9"
        ]
    },

    {
        title: "Primi Piatti",
        items: [
            "Pasta alla Carbonara — €12",
            "Lasagna al Ragù — €13",
            "Risotto ai Funghi — €14"
        ]
    },

    {
        title: "Fast Food Italiano",
        items: [
            "Panino Italiano — €9",
            "Piadina Romagnola — €8",
            "Pizza Margherita — €10"
        ]
    },

    {
        title: "Dolci",
        items: [
            "Tiramisù — €7",
            "Panna Cotta — €6",
            "Cannoli Siciliani — €7"
        ]
    },

    {
        title: "Bevande",
        items: [
            "Acqua Naturale — €2",
            "Limonata — €4",
            "Caffè Italiano — €3",
            "Spremuta d'Arancia — €5"
        ]
    }
    ];



    const content = document.getElementById("content");

    const heading = document.createElement("h2");
    heading.textContent = "Il Nostro Menu";

    const menuList = document.createElement("ul");

    categories.forEach((category) => {

       const categoryItem = document.createElement("li");
       categoryItem.textContent = category.title;

       const itemList = document.createElement("ul");

       category.items.forEach((item) => {

          const foodItem = document.createElement("li");
          foodItem.textContent = item;
          itemList.appendChild(foodItem);

        });

        categoryItem.appendChild(itemList);
        menuList.appendChild(categoryItem);

    });


    content.appendChild(heading);
    content.appendChild(menuList);

}