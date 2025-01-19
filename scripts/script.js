document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const publishBtn = document.getElementById('publish-btn');
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const noteList = document.getElementById('note-list');
    const previewText = document.getElementById('preview-text');
    const convertToDraftBtn = document.getElementById('convert-to-draft');

    // Handle form submission
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Post saved as draft!');
    });

    publishBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Post published!');
    });

    // Handle note addition
    addNoteBtn.addEventListener('click', () => {
        if (noteInput.value.trim() !== '') {
            const noteItem = document.createElement('li');
            noteItem.textContent = noteInput.value;
            noteItem.addEventListener('click', () => {
                previewText.textContent = noteItem.textContent;
            });
            noteList.appendChild(noteItem);
            noteInput.value = '';
        }
    });

    // Convert note to draft
    convertToDraftBtn.addEventListener('click', () => {
        const selectedNote = previewText.textContent;
        if (selectedNote.trim() !== '') {
            document.getElementById('content').value = selectedNote;
            alert('Note converted to draft!');
        }
    });
});