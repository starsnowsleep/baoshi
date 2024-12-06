// // main.js
document.addEventListener('DOMContentLoaded', () => {
    const editorBody = document.getElementById("editor-body");
    const textarea = document.getElementById('edit');
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.getElementById('preview').innerHTML =
                marked.parse(textarea.value);
            editorBody.classList.remove('edit-mode');
        } else if (event.key === 'i' || event.key === 'I') {
            editorBody.classList.add('edit-mode');
        }
    });
});