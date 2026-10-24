
const favorites = [
    "God",
    "Family",
    "My Dog Milo",
    "Spider-Man",
    "Movies",
    "Marvel",
    "Writing",
    "Pokemon",
    "Lego",
    "Video Games"
];

const favoritesList = document.getElementById("favorites-list");

const itemCount = document.getElementById("item-count");

for (let i = 0; i < favorites.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = favorites[i];
    favoritesList.appendChild(listItem);
}

itemCount.textContent = favorites.length + " favorites";