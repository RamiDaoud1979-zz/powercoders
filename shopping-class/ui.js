/**
 *  Set up even listeners and configure initial element state when the
 *  DOM is ready
 */
function domContentLoaded() {
  /** Widget that the user types on item in to. */
  const inputBox = document.getElementById('item');
  const quantityBox = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('#add');
  const clearListButton = document.querySelector('#clear');

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

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem());
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

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem());
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