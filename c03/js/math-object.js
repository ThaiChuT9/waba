var randomNum = Math.floor(Math.random() * 100) + 1;

var el = document.getElementById('info');
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';
