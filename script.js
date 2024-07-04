// script.js
function addNote() {
    const noteText = document.getElementById('note-text').value;
    if (noteText.trim() === "") {
        alert("Note cannot be empty");
        return;
    }

    const notesList = document.getElementById('notes-list');
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = noteText;
    notesList.appendChild(note);

    document.getElementById('note-text').value = '';
}
