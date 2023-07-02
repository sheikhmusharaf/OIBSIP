let string = " ";
let memory = 0;

function addToMemory() {
  memory += eval(string);
}

function subtractFromMemory() {
  memory -= eval(string);
}

function clearMemory() {
  memory = 0;
}

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {

  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === "C") {
      string = " ";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === "√") {
        string = Math.sqrt(eval(string));
        document.querySelector('input').value = string;
      } 
      else if (e.target.innerHTML === "del") {
        if (string.length > 0) {
          string = string.slice(0, -1);
          document.querySelector('input').value = string;
        }
      }
     
   else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
});
