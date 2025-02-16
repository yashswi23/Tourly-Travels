// function searchDestinations() {
//     const searchValue = document.getElementById("searchBox").value.toLowerCase();
//     const eventCards = document.querySelectorAll(".event-card");

//     eventCards.forEach(card => {
//         const category = card.getAttribute("data-category").toLowerCase();
//         if (category.includes(searchValue) || searchValue === "") {
//             card.parentElement.style.display = "block";
//         } else {
//             card.parentElement.style.display = "none";
//         }
//     });
// }

// function clearSearch() {
//     document.getElementById("searchBox").value = "";
//     const eventCards = document.querySelectorAll(".event-card");
//     eventCards.forEach(card => {
//         card.parentElement.style.display = "block";
//     });
// }
