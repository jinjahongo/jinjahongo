// gnb.js
fetch('gnb.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('gnb-container').innerHTML = data;
    document.querySelector('.gnb').classList.add('show');
  });
