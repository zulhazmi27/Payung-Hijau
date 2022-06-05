const para = document.getElementById('tq');
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const check = document.getElementById('checkbox');

check.addEventListener("click", validator);

function validator() {
  if (check.checked == true) {
    document.getElementById('name').disabled = true;
  } else {
    document.getElementById('name').disabled = false;
  }
}

submit.onclick = function() {

  if (name.value == "" || email.value == "") {
    para.textContent = "You haven't filled in the form completely !";
  } else {
    para.textContent = "Your donation is a success !";
  }
}