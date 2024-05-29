var originNumber = 10.23456;
var msg = '<h2>Original number</h2><p>' + originNumber + '</p>';
msg += '<h2>3 decimal places</h2><p>' + originNumber.toFixed(3) + '</p>';
msg += '<h2>3 digits</h2><p>' + originNumber.toPrecision(3) + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;