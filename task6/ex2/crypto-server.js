// Import the required CryptoJS modules
const crypto = require('crypto')
const express = require('express')
const path = require('path')

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
  console.log(data)
  // Get the secret key from the password
  getSecretKey(data.password).then((secretKey) => {
    res.json({secretKey: secretKey})
  })
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