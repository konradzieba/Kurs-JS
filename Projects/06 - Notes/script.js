const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('delete-note');
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const deleteAllBtn = document.querySelector('.delete-all');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardId = 0;

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textarea.value = '';
	category.selectedIndex = 0;
};

const addNote = () => {
	if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0'
	) {
		createNote();
		error.style.visibility = 'hidden';
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardId);

	newNote.innerHTML = `
        <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardId})">
                    <i class="fas fa-times icon"></i>
                </button>
        </div>
        <div class="note-body">
        ${textarea.value}
        </div>
`;

	noteArea.append(newNote);
	cardId++;
	textarea.value = '';
	category.selectedIndex = 0;
	notePanel.style.display = 'none';
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
	switch (selectedValue) {
		case 'Shopping':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Work':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Others':
			note.style.backgroundColor = 'rgb(0,170,255';
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);
