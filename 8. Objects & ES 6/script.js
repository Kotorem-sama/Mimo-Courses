const charactersContainer = document.getElementById("characters-container");

fetch("https://rickandmortyapi.com/api/character")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
  data.results.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" class="character-image">
      <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
      <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
      <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
    `;

    charactersContainer.appendChild(card);
  });
}).catch(error => {
    console.error("Fetch error:", error);
    // Display a user-friendly message in the UI
  });

