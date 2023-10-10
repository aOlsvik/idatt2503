const crypto = require('crypto')

function passcrack(){
  let password = ''
  const salt = 'Saltet til Ola'
  const iterations = 2048
  const key = "ab29d7b5c589e18b52261ecba1d3a7e7cbf212c6"
  const keylen = key.length / 2
  const digest = 'sha512'

  for(let i = 0; i<36; i++){
    for(let j = 0; j<36; j++){
        for(let k=0; k<36; k++){
          for(let l=0; l<36; l++){
            password = ''
            if(i<26){
              password += String.fromCharCode(97+i)
            }
            else{
              password += (i-26).toString()
            }
            if(j<26){
              password += String.fromCharCode(97+j)
            }
            else{
              password += (j-26).toString()
            }
            if(k<26){
              password += String.fromCharCode(97+k)
            }
            else{
              password += (k-26).toString()
            }
            if(l<26){
              password += String.fromCharCode(97+l)
            }
            else{
              password += (l-26).toString()
            }
            console.log("Password: " + password)
            const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex')
            if(hash === key){
              console.log("Password: " + password)
              return
            }
          }
        }
    }
  }
  console.log("Password not found")
}

passcrack()
