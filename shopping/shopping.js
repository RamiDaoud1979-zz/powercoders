function createNewListItem(itemName) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function (event) {
    console.log('Delete button is clicked' + " " + itemName);
    li.remove();
  });
  li.appendChild(deleteButton);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const ulElement = document.querySelector('ul');
  const inputBox = document.getElementById('item');
  const addItemButton = document.querySelector('button');

  document.querySelector('button').addEventListener('click', function () {
    if (inputBox.value.trim() !== '') {
      ulElement.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
      addItemButton.disabled = true;
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      addItemButton.disabled = false;
      if (event.key === 'Enter') {
        ulElement.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
    if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });
  addItemButton.disabled = true;
  inputBox.focus();
});