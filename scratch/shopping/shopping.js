function createNewListItem(itemName) {
  //Create li node
  let li = document.createElement('li');

  // create span node
  let span = document.createElement('span');
  // let spanText = document.createTextNode(itemName);
  // li.appendChild(spanText);
  // Alternatively...
  span.innerText = itemName;
  li.appendChild(span);

  /* // create button node
   let button = document.createElement('button');
   // create button text node
   let buttonText = document.createTextNode('delete');
   // append text node to button
   button.appendChild(buttonText);*/

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  // Add a click handler that logs the click here
  deleteButton.addEventListener('click', function () {
    console.log('Delete button is clicked' + " " + itemName);

// Remove the list item
    li.remove();
  });

  li.appendChild(deleteButton);
  return li;
  // Note: you can create the all the elements first then append them to each other or create each elements append it then go on creating the second element and append it and so on
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', function () {
    // document.querySelector('ul').appendChild(createNewListItem(document.getElementById('item').value));

    let ulElement = document.querySelector('ul');
    let inputBox = document.getElementById('item');
    let createListItem = createNewListItem(inputBox.value);
    ulElement.appendChild(createListItem);
  });
});