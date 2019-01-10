function createNewListItem(itemName) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function (event) {
    console.log('Delete button is clicked' + " " + itemName);
    li.remove();
  });
  li.appendChild(deleteButton);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function () {
    let ulElement = document.querySelector('ul');
    let inputBox = document.getElementById('item');
    let createListItem = createNewListItem(inputBox.value);
    ulElement.appendChild(createListItem);
    inputBox.value = '';
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      let ulElement = document.querySelector('ul');
      let inputBox = document.getElementById('item');
      let createListItem = createNewListItem(inputBox.value);
      ulElement.appendChild(createListItem);
      inputBox.value = '';
    }
  });
});