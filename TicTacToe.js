var restart = document.querySelector('#b')
// restart Button
var text = document.querySelectorAll('td')
// Where the text goes in the boxes
function clearBoard() {
  for (var i = 0; i < text.length; i++) {
    text[i].textContent = ''
  }
}
restart.addEventListener('click', clearBoard)

function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

for (var i = 0; i < text.length; i++) {
  text[i].addEventListener('click', changeMarker)
}
