const charactersContainer = document.getElementById("characters-container");
let characterId = 0;

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
    card.id = `character-id-${characterId}`;

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" class="character-image" onclick="characterFocus(${characterId++})">
      <p class="character-detail name"><span class="attribute">Name:</span> ${character.name}</p>
      <p class="character-detail status"><span class="attribute">Status:</span> ${character.status}</p>
      <p class="character-detail species"><span class="attribute">Species:</span> ${character.species}</p>
    `;

    charactersContainer.appendChild(card);
  });
}).catch(error => {
    console.error("Fetch error:", error);
  });


const modal = document.getElementById("character-modal");
const closeBtn = document.getElementById("close-modal");

function characterFocus(characterId) {
  let characterCard = document.getElementById(`character-id-${characterId}`);

  document.getElementById("modal-image").src = characterCard.querySelector("img").src;
  document.getElementById("modal-name").textContent = characterCard.querySelector(".name").textContent.replace("Name: ", "");
  document.getElementById("modal-status").textContent = characterCard.querySelector(".status").textContent.replace("Status: ", "");
  document.getElementById("modal-species").textContent = characterCard.querySelector(".species").textContent.replace("Species: ", "");

  modal.style.display = "block";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};