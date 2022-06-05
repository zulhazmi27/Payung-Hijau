const para = document.getElementById('validation');
const signup = document.getElementById('signup');
const name = document.getElementById('name');
const email = document.getElementById('mail');

signup.onclick = function() {

  if (name.value == "" || email.value == "") {
    para.textContent = "You have not input your name or e-mail !";
  } else {
    para.textContent = "Congratulations ! You are Signed Up !";
  }

}