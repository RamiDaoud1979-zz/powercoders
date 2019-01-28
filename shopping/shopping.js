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
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<img src="delete.png" alt="delete"/>';
  deleteButton.addEventListener('click', function (event) {
    li.remove();

    document.querySelector('button#clear').disabled = document.querySelectorAll('li').length === 0;   });
  li.appendChild(deleteButton);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  /** Widget that the user types on item in to. */
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button#add');
  const clearListButton = document.querySelector('button#clear');

  clearListButton.addEventListener('click', function () {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (element) {
      element.remove();
    });
    clearListButton.disabled = true;
  });


  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
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
    clearListButton.disabled = false;
  });
  inputBox.focus();
  addItemButton.disabled = true;
  clearListButton.disabled = true;
});

