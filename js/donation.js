const five = document.getElementById('RM5');
const twentyFive = document.getElementById('RM25');
const fifty = document.getElementById('RM50');
const twoFifty = document.getElementById('RM250');
const btnParent = document.querySelector('#button-wrapper');
const container = document.getElementById('button-wrapper');
const next = document.getElementById('next');
const inputField = document.getElementById('other');

let x = 0;
let total1 = 0;
let total2 = 0;


document.addEventListener("DOMContentLoaded", function() {
  addEvent();
});



function addEvent() {
  five.addEventListener("click", changeColor);
  twentyFive.addEventListener("click", changeColor);
  fifty.addEventListener("click", changeColor);
  twoFifty.addEventListener("click", changeColor);
}




function changeColor(event) {

  event.target.classList.toggle('btn-clicked');
  x++;


  if (x % 2 == 0) {


    switch (event.target) {
      case five:
        document.getElementById('RM25').disabled = false;
        document.getElementById('RM50').disabled = false;
        document.getElementById('RM250').disabled = false;
        break;
      case twentyFive:
        document.getElementById('RM5').disabled = false;
        document.getElementById('RM50').disabled = false;
        document.getElementById('RM250').disabled = false;
        break;
      case fifty:
        document.getElementById('RM5').disabled = false;
        document.getElementById('RM25').disabled = false;
        document.getElementById('RM250').disabled = false;
        break;
      case twoFifty:
        document.getElementById('RM5').disabled = false;
        document.getElementById('RM25').disabled = false;
        document.getElementById('RM50').disabled = false;
        break;
    }

    total1 -= parseInt(event.target.value);

  } else if (x % 2 == 1) {


    switch (event.target) {
      case five:
        document.getElementById('RM25').disabled = true;
        document.getElementById('RM50').disabled = true;
        document.getElementById('RM250').disabled = true;
        break;
      case twentyFive:
        document.getElementById('RM5').disabled = true;
        document.getElementById('RM50').disabled = true;
        document.getElementById('RM250').disabled = true;
        break;
      case fifty:
        document.getElementById('RM5').disabled = true;
        document.getElementById('RM25').disabled = true;
        document.getElementById('RM250').disabled = true;
        break;
      case twoFifty:
        document.getElementById('RM5').disabled = true;
        document.getElementById('RM25').disabled = true;
        document.getElementById('RM50').disabled = true;
        break;
    }

    total1 += parseInt(event.target.value);


  }



}


next.onclick = function() {

  const amount = parseInt(document.getElementById('other').value);

  if (amount == "") {
    total2 = 0;
  } else {
    total2 = amount;
  }

  let totalFunds = 0;
  totalFunds += (total1 + total2);

  localStorage.setItem("funds", totalFunds);

}