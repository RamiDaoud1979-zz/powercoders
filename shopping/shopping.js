/**
 * Create and returns an 'li' element for inclusion in the shopping list.
 *
 *
 * @param {string} itemName Name of the item to add to the list
 * @param {string} quantity Quantity of the item to append to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName, quantity) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);

  if (quantity !== '') {
    li.appendChild(document.createTextNode(' '));
    const quantityText = document.createElement('span');
    quantityText.textContent = `(${quantity})`;
    li.appendChild(quantityText);
  }

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<img src="delete.png" alt="delete"/>';
  deleteButton.addEventListener('click', function (event) {
    li.remove();
    document.querySelector('button#clear').disabled = document.querySelectorAll('li').length === 0;
  });
  li.appendChild(deleteButton);
  return li;
}

/**
 *  Set up even listeners and configure initial element state when the
 *  DOM is ready
 */
function domContentLoaded() {
  /** Widget that the user types on item in to. */
  const inputBox = document.getElementById('item');
  const quantityBox = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button#add');
  const clearListButton = document.querySelector('button#clear');

  clearListButton.addEventListener('click', function () {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (element) {
      element.remove();
    });
    clearListButton.disabled = true;
    inputBox.focus();
  });

  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue, quantityBox.value.trim()));
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
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

    shoppingList.appendChild(createNewListItem(trimmedValue, quantityBox.value.trim()));
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
  });

  inputBox.focus();
  addItemButton.disabled = true;
  clearListButton.disabled = true;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}