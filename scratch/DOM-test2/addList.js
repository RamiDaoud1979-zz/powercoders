
function addList() {
    let elLi1 = document.createElement('li');
    let elBody = document.getElementById('body');
    let liContentTextLi1 = document.createTextNode('Item one');
    elLi1.appendChild(liContentTextLi1);
    elBody.appendChild(elLi1);

let elLi2 = document.createElement('li');
    let liContentText1 = document.createTextNode('This is a ');
    elLi2.appendChild(liContentText1);

    let liContentEm = document.createElement('em');
    elLi2.appendChild(liContentEm);
    let liContentEmText = document.createTextNode('new');
    liContentEm.appendChild(liContentEmText);
    let liContentText2 = document.createTextNode(' text');
    elLi2.appendChild(liContentText2);
    elBody.appendChild(elLi2);

    let elLi3 = document.createElement('li');
    let liContentTextLi3 = document.createTextNode('Item Three');
    elLi3.appendChild(liContentTextLi3);
    elBody.appendChild(elLi3);
    }

    document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event.type + 'fired');

    document.getElementById('click-para').addEventListener('click' , function (event){

        console.log(event.type + 'fired');

        addList();
    });
});
