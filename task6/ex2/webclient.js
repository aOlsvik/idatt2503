const username = document.getElementById('username')
const password = document.getElementById('password')
const login = document.getElementById('login')
const secret = document.getElementById('secret')
const secrettext = document.getElementById('secrettext')
let jwt = ''

login.addEventListener('click', function(event) {
  if(!username.value || !password.value) {
    return;
  }
  const salt = CryptoJS.lib.WordArray.random(128/8);
  const iterations = 2048;
  const keylen = 32;
  const digest = 'sha512';
  const derivedKey = CryptoJS.PBKDF2(password.value, salt, {iterations, keylen, digest})
  sendLogin(username.value, derivedKey.toString())
})

secret.addEventListener('click', function(event) {
  let result = getSecret()
})

// send loginrequest to server on loclahost:3000 to endpoint /login
// with username and encrypted password
function sendLogin(username, password) {
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then((response) => response.json())
  .then((data) => {
    jwt = data.jwt
  })
  .catch((error) => {
    console.error('Error:', error);
  })

}

function getSecret(){
  fetch('http://localhost:3000/secret', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwt
    }
  })
  .then((response) => {
    response.text().then((text) => {
      secrettext.innerHTML = text
    })
  })
}
