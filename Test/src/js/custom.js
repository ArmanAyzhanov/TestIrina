var rIndex, 
	table = document.getElementById('table');

var books = 
	[ 
		{ 
			isbn: 1, 
			title: 'Evgeniy Onegin', 
			publisher: 'publisher', 
			year: 1856, 
			pages: 300, 
			pictures: true, 
			authors: [ 'Victor Ivanovsky Sergeevich', 'Alexander Pushkin Sergeevich' ], 
		}, 
		{ 
			isbn: 2, 
			title: 'Peace and War', 
			publisher: 'publisher', 
			year: 1802, 
			pages: 300, 
			pictures: true, 
			authors: [ 'Arman Aizhanov Kuanyshbekovich', 'Lev Tolstoy Nikolaevich' ], 
		}, 
		{ 
			isbn: 3, 
			title: 'Blue ocean', 
			publisher: 'publisher', 
			year: 1904, 
			pages: 300, 
			pictures: true, 
			authors: [ 'Dias Kussainov Ablayevich', 'Gogol Nikolay Vasilyevich' ], 
		}, 
		{ 
			isbn: 4, 
			title: 'A little man', 
			publisher: 'publisher', 
			year: 1889, 
			pages: 300, 
			pictures: true, 
			authors: [ 'Victor Ivanovsky Sergeevich', 'Alexander Pushkin Sergeevich' ], 
		}, 
	]; 

window.onload = function() { 
	renderBooks(); 
	renderAuthors();
}; 

function createBookRow( index ) { 

	var book = books[index];

	var bookRow = document.createElement('tr');

	var isbn = document.createElement('td'); 
	isbn.innerText = book.isbn 
	bookRow.appendChild(isbn); 
	
	// var author = document.createElement('td');
	
	 // var authorString = book.authors.join(','); 
	 // author.innerText = authorString 
	 // bookRow.appendChild(author); 
	
	var title = document.createElement('td'); 
	title.innerText = book.title 
	bookRow.appendChild(title); 
	
	var year = document.createElement('td'); 
	year.innerText = book.year 
	bookRow.appendChild(year); 
	
	var editCell = document.createElement('td'); 
	
	var buttonEdit = document.createElement('button');
	buttonEdit.innerText = 'Edit';


	buttonEdit.onclick = () => {	
		editBook(index);
	} 

	editCell.appendChild(buttonEdit); 
	bookRow.appendChild(editCell); 

	var editCell = document.createElement('td'); 
	var buttonRemove = document.createElement('button');
	buttonRemove.innerText = 'Remove';  

	buttonRemove.onclick = () => { 
		var answer = confirm('Are you sure?');
			if (answer){
				removeBook(index);
			} else {}

	} 

	editCell.appendChild(buttonRemove); 
	bookRow.appendChild(editCell); 

	return bookRow;

} 

function renderBooks() {
	table.innerHTML = 
		`<tr id="first-tr">
			<th>ISBN</th>
			<th>Title</th>
			<th>Year</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>`;

	for (var i = 0; i < books.length; i++) { 
	
		var newBook = createBookRow( i ); 
	
		table.appendChild( newBook ); 
	} 
}

function editBook( index ){ 

	showModal('edit');

	var book = books[index];

	document.getElementById('edit-isbn').value = book.isbn; 
	document.getElementById('edit-title').value = book.title; 
	document.getElementById('edit-PH').value = book.publisher; 
	document.getElementById('edit-year').value = book.year; 
	document.getElementById('edit-num').value = book.pages;

	var saveEditButton = document.getElementById('edit-saveButton');

	saveEditButton.onclick = function(){		
		saveEdit(index);
	}

}

function showModal(type) {
	var modalWindow = document.getElementById(type + 'Book');

	modalWindow.style.display = 'block';
}

function closeModal(type) {
	var modalWindow = document.getElementById(type + 'Book');

	modalWindow.style.display = 'none';
}

function removeBook(index){	
	books = [
		...books.slice(0, index),
		...books.slice(index + 1)
	];
	renderBooks();
}



function saveEdit(index){
	var editedBook = {
		isbn: document.getElementById('edit-isbn').value, 
		title: document.getElementById('edit-title').value,
		publisher: document.getElementById('edit-PH').value,
		year: document.getElementById('edit-year').value,
		pages: document.getElementById('edit-num').value
	}

	books[index] = editedBook;
	renderBooks();
	closeModal('edit');
}

function addBook() {
	var newBook = {
		isbn: document.getElementById('add-isbn').value, 
		title: document.getElementById('add-title').value,
		publisher: document.getElementById('add-PH').value,
		year: document.getElementById('add-year').value,
		pages: document.getElementById('add-num').value
	};

	books.push(newBook);
	renderBooks();
	closeModal('add');
}

var	tableAuthor = document.getElementById('authorTable');

var bookAuthors = 
	[ 
		{ 
			names: [ 'Victor Ivanovsky Sergeevich', 'Alexander Pushkin Sergeevich' ], 
		} 
	]; 


function createAuthorRow( index ) { 

	var author = bookAuthors[index];

	var authorRow = document.createElement('tr'); 
	
	var authorName = document.createElement('td'); 

	var authorString = author.names.join(','); 
	authorName.innerText = authorString
	authorRow.appendChild(authorName);

	return authorRow;

} 

function renderAuthors() {
	tableAuthor.innerHTML = 
		`<tr id="second-tr">
			<th>First name</th>
		</tr>`;

	for (var i = 0; i < books.length; i++) { 
	
		var newAuthor = createAuthorRow( i ); 
	
		tableAuthor.appendChild( newAuthor ); 
	} 
}

function addAuthor() {
	var newAuthorName = {
		names: document.getElementById('add-newAuthor').value, 
	};

	bookAuthors.push(newAuthorName);
	renderAuthors();
	// closeModal('add');
}
