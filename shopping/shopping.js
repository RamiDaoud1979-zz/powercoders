/**
 * Create and returns an 'li' element for inclusion in the shopping list.
 *
 * Read the code to understand the DOM tree structure.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);
  const deleteButton = document.createElement(  'button');
  deleteButton.innerHTML = '<img src="delete.png" alt="delete"/>';
  deleteButton.addEventListener('click', function (event) {
    console.log('Delete button is clicked' + " " + itemName);
    li.remove();
  });
  li.appendChild(deleteButton);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  /** Widget that the user types on item in to. */
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');

  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
  });
  inputBox.focus();
  addItemButton.disabled = true;
});

