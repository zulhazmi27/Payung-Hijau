const homeFunds = document.getElementById('funds');

window.onload = function() {
  fetch('https://api.countapi.xyz/update/homefunds/funds?amount=1')
    .then(res => res.json())
    .then(res => {
      homeFunds.innerHTML = res.value;
    });
}