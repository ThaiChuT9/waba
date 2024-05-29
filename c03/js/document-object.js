var msg = '<p><b>Page title: </b>' + document.title +'</br>';
msg += '<b>Page address: </b>' + document.URL + '</br>';
msg += '<b>Last modified: </b>' + document.lastModified + '</p>';
var el = document.getElementById('footer');
el.innerHTML = msg;