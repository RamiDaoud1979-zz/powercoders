
function addList() {
    // ul and body
    let elUl = document.createElement('ul');
    let elBody = document.getElementById('body');
    //List one
    let elLi1 = document.createElement('li');
    let liContentTextLi1 = document.createTextNode('Item one');
    elLi1.appendChild(liContentTextLi1);
    elUl.appendChild(elLi1);
// list two
    let elLi2 = document.createElement('li');
    let liContentText1 = document.createTextNode('This is a ');
    elLi2.appendChild(liContentText1);
//em under lists 2
    let liContentEm = document.createElement('em');
    elLi2.appendChild(liContentEm);
    let liContentEmText = document.createTextNode('new');
    liContentEm.appendChild(liContentEmText);
    let liContentText2 = document.createTextNode(' text');
    elLi2.appendChild(liContentText2);
    elUl.appendChild(elLi2);
//list three
    let elLi3 = document.createElement('li');
    let liContentTextLi3 = document.createTextNode('Item Three');
    elLi3.appendChild(liContentTextLi3);
    elUl.appendChild(elLi3);

    elBody.appendChild(elUl)
}

document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event.type + 'fired');

    document.getElementById('click-para').addEventListener('click' , function (event){

        console.log(event.type + 'fired');

        addList();
    });
});