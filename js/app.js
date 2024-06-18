let notes = [
  {
    id: 1,
    title: "Note 1",
  },
  {
    id: 2,
    title: "Note 2",
  },
  {
    id: 3,
    title: "Note 3",
  },
];

const containerCards = document.getElementById("container-cards");
const btnCreateNote = document.getElementById("btn-create");
btnCreateNote.addEventListener("click", createNote);

function createNote() {
  const title = document.getElementById("note").value;
  containerCards.innerHTML += `
    <div class="card">
        <p>${title}</p>
        <div class="container-btn">
            <button id="btn-delete">Borrar</button>
        </div>
      </div> `;
}
