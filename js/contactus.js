const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const text1 = document.getElementById('title');
const text2 = document.getElementById('subtitle');
const para = document.getElementById('a');

btn.onclick = function() {
  if ((name.value == "" || email.value == "") || message.value == "") {
    text1.innerHTML = "Failed!";
    text2.innerHTML = "You haven't filled in the form completely.";
  } else {
    text1.innerHTML = "Successful!";
    text2.innerHTML = "Your email have been sent.";
  }
}