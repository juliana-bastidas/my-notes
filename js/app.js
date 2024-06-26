//Crear un arreglo vacio para guardar las notas
let notes = [];

// Recuperar notas de localStorage al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
  }
  renderNotes();
});

// referencia a los elementos del HTML
const containerCards = document.getElementById("container-cards");
const btnCreateNote = document.getElementById("btn-create");
btnCreateNote.addEventListener("click", createNote);

// Función para crear una nota
function createNote() {
  const title = document.getElementById("note").value; //valor del input con id note
  if (title.trim() === "") {
    alert("La nota no puede estar vacia");
    return;
  }
  const noteId = Date.now(); // Generar un id único para la nota1
  notes.push({ id: noteId, title: title});
  renderNotes();
  saveNotes(); // Guardar las notas en localStorage
  document.getElementById("note").value = ""; //limpiar input
}
// Función para borrar una nota
function deleteNote(noteId) {
  notes = notes.filter((note) => note.id !== noteId);
  renderNotes();
  saveNotes(); // Guardar las notas en localStorage
}

function editNote (noteId) {
  const newtitle = prompt("Escribe el nuevo titulo de la nota"); 
  const note = notes.find((note) => note.id === noteId);
  note.title = newtitle;
  renderNotes()
  saveNotes();
}

// Función para mostrar las notas 
function renderNotes() {
  containerCards.innerHTML = ""; // Limpiamos el contenido previo

  // Iteramos sobre las notas y creamos el HTML para cada una
  notes.forEach((note) => {
    const noteHtml = `
      <div class="card">
        <p>${note.title}</p>
        <div class="container-btn">
          <button id="btn-delete" onclick="deleteNote(${note.id})">Borrar</button>
          <button id="btn-edit" onclick ="editNote(${note.id})" = >Editar</button>
        </div>
      </div>
    `;
    containerCards.innerHTML += noteHtml;  // Agregamos la nota al contenedor
    //containerCards.innerHTML = containerCards.innerHTML + noteHtml; 
  });
}
// Función para guardar notas en localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}
