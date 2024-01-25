const baseUrl = 'http://localhost:3000';

const addNote = document.querySelector('.add-note');
const modalContainer = document.querySelector('.modal-container');
const cancel = document.querySelector('.title i');
const title = document.querySelector('#title');
const description = document.querySelector('textarea');
const addBtn = document.querySelector('.submit');

const deleteNoteIcon = document.querySelector('.delete');

// handle the modal close and open
addNote.addEventListener('click', () => {
	modalContainer.classList.add('show');
});

cancel.addEventListener('click', () => {
	modalContainer.classList.remove('show');
});

// save that info
addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let titleValue = title.value;
	let descValue = description.value;

	saveToDb(titleValue, descValue);
	modalContainer.classList.remove('show');
});

// save data to the database
function saveToDb(title, desc, name) {
	fetch(`${baseUrl}/notes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: `${title}`,
			description: `${desc}`,
			name: '',
		}),
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
}

deleteNoteIcon.addEventListener('click', () => {
	deleteNote(2);
});

function deleteNote(id) {
	fetch(`${baseUrl}/notes/${id}`, {
		method: 'DELETE',
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
}
