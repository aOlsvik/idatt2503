// Import the required CryptoJS modules
const crypto = require('crypto')
const express = require('express')
const path = require('path')
const jwt = require('jsonwebtoken')

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Visit http://localhost:${PORT}`)
});

app.post('/login', (req, res) => {
  const data = req.body
  // assuming getSecretKey checks if the password is correct
  getSecretKey(data.password).then((secretKey) => {
    res.json({jwt: getJWT(data.username)})
  })
})

app.get('/secret', (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  if(!token) {
    res.status(401).send('Unauthorized')
  }
  else {
    res.status(200).send('This is the secret message')
  }
})

// Define a secret key for encryption and decryption
function getSecretKey(passwordhash){
  return new Promise((resolve, reject) => {
    const password = passwordhash
    const salt = crypto.randomBytes(16)
    const iterations = 2048
    const keylen = 32
    const digest = 'sha512'
    crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
      if (err) reject(err)
      resolve(derivedKey.toString('hex'))
    })
  })
}

function getJWT(username){
  const secret_key = 'server-secret-key-plz-dont-share'
  const payload = {
    username: username
  }
  const options = {
    expiresIn: '1h'
  }
  return jwt.sign(payload, secret_key, options)
}