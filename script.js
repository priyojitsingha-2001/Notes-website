const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('#create');
const notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateNotes();
});

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateNotes();
    }
});
notesContainer.addEventListener('keyup', (e) => {
    if (e.target.tagName === 'P') {
        updateNotes();
    }
});


