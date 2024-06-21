let notes = [];

// Recuperar notas de localStorage al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
  }
  renderNotes();
});

const containerCards = document.getElementById("container-cards");
const btnCreateNote = document.getElementById("btn-create");
btnCreateNote.addEventListener("click", createNote);

function createNote() {
  const tittle = document.getElementById("note").value;
  if (tittle.trim()==="") {
    alert("La nota no puede estar vacia");
    return;
  }
  const noteId = Date.now();
  notes.push({ id: noteId, tittle });
  renderNotes();
  saveNotes(); // Guardar las notas en localStorage
  document.getElementById("note").value = ""; //limpiar input
  

}

function deleteNote(noteId) {
  notes = notes.filter(note => note.id !== noteId);
  renderNotes();
  saveNotes(); // Guardar las notas en localStorage
}

function renderNotes() {
  containerCards.innerHTML = ""; // Limpiamos el contenido previo

  // Iteramos sobre las notas y creamos el HTML para cada una
  notes.forEach((note) => {
    const noteHtml = `
      <div class="card">
        <p>${note.tittle}</p>
        <div class="container-btn">
          <button id="btn-delete" onclick="deleteNote(${note.id})">Borrar</button>
        </div>
      </div>
    `;
    containerCards.innerHTML += noteHtml; // Agregamos la nota al contenedor
  });

  // Agregar estilo para espacio entre notas
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    if (index > 0) {
      card.style.marginTop = '16px'; // Ajusta el valor de margin-top según lo necesites
    }
  });
}

// Función para guardar notas en localStorage
function saveNotes() {
 localStorage.setItem("notes", JSON.stringify(notes));
}


