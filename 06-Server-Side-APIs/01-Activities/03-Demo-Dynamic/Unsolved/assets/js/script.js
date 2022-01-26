var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i <= 5; i++) {
        document.querySelector('#users').appendChild(data[i].url)
        document.querySelector('#users').appendChild(data[i].login)
      }
    
    });
}
fetchButton.addEventListener('click', getApi);
