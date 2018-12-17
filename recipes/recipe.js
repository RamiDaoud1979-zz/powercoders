/*calories*/
function hide1(event) {
    setClass('hide-list1', 'hide1');
    setClass('calories-list', 'hide1');
    setClass('show-list1', 'show1');
}

function show1(event) {
    setClass('hide-list1', 'show1');
    setClass('calories-list', 'show1');
    setClass('show-list1', 'hide1');
}
/*ingredients*/
function hide2(event) {
    setClass('hide-list2', 'hide2');
    setClass('ingredient-list', 'hide2');
    setClass('show-list2', 'show2');
}

function show2(event) {
    setClass('hide-list2', 'show2');
    setClass('ingredient-list', 'show2');
    setClass('show-list2', 'hide2');
}
/* instruction*/
function hide3(event) {
    setClass('hide-list3', 'hide3');
    setClass('instruction-list', 'hide3');
    setClass('show-list3', 'show3');
}

function show3(event) {
    setClass('hide-list3', 'show3');
    setClass('instruction-list', 'show3');
    setClass('show-list3', 'hide3');
}

function setClass(id, className) {
    let el = document.getElementById(id);
    el.className = className;
}
