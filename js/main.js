let btn = document.getElementById("btn");
btn.addEventListener("click", function addItem(){
    // store user value
	let item    = document.getElementById('toDo').value
	// create a text node from the user input
	let text    = document.createTextNode(item)
	// create a li tag
	let newItem = document.createElement('li')
	// add the user input to the li tag
	newItem.appendChild(text)
	// append the li to the html todoList id tag
	document.getElementById('theList').appendChild(newItem)
})