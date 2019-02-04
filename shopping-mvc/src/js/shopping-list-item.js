/**
 * Represent an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param name {string} name of the item
   * @param quantity {string} quantity of the item
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * Create and returns an 'li' element for inclusion in the shopping list.
   * @returns {HTMLElement} li element
   */
  toListItem() {
    const li = document.createElement('li');
    const listText = document.createElement('span');
    listText.innerText = this.name;
    li.appendChild(listText);

    if (this.quantity !== '') {
      li.appendChild(document.createTextNode(' '));
      const quantityText = document.createElement('span');
      quantityText.textContent = `(${this.quantity})`;
      li.appendChild(quantityText);
    }

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img src="../static/delete.png" alt="delete"/>';
    deleteButton.addEventListener('click', function (event) {
      li.remove();
      document.querySelector('button#clear').disabled = document.querySelectorAll('li').length === 0;
    });
    li.appendChild(deleteButton);
    return li;
  }
}
