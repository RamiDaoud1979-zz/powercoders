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

    // create button node
    let button = document.createElement('button');
    // create button text node
    let buttonText = document.createTextNode('delete');
    // append text node to button
    button.appendChild(buttonText);
    li.appendChild(button);
    return li;
}

document.addEventListener('DOMContentLoaded', function () {
   document.querySelector('button').addEventListener('click', function() {
       document.querySelector('ul').appendChild(createNewListItem(document.getElementById('item').value));
      });
});