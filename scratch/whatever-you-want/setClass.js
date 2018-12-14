// Javascript code goes here
function setClassTip(event) {
  let el = document.getElementById('mypara');
  el.className = 'tip';
}

function setClassWarning(event) {
  let el = document.getElementById('mypara');
  el.className = 'warning';
}

function clearClass(event) {
  let el = document.getElementById('mypara');
  el.className = '';
}