/**
 * 
 * Copyright (C) 2024 starsnowsleep
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
document.addEventListener('DOMContentLoaded', () => {
    const editorBody = document.getElementById("editor-body");
    const textarea = document.getElementById('edit');
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.getElementById('preview').innerHTML =
                marked.parse(textarea.value);
            editorBody.classList.toggle('edit-mode');
            if (editorBody.classList.contains('edit-mode')) {
                textarea.focus();
            }
        }
    });
});