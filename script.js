let x = 0;

function count() {
  document.getElementById('counter').innerHTML = '' + x++;
  setTimeout(count, 1000);
}

window.onload = count;
