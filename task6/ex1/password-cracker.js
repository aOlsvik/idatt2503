const crypto = require('crypto')

function passcrack(){
  let password = ''
  const salt = 'Saltet til Ola'
  const iterations = 2048
  const key = "ab29d7b5c589e18b52261ecba1d3a7e7cbf212c6"
  const keylen = key.length / 2
  const digest = 'sha1'


  for(let i = 0; i<52; i++){
    console.log(i)
    for(let j = 0; j<52; j++){
        for(let k=0; k<52; k++){
          password = getCharacter(i) + getCharacter(j) + getCharacter(k)
          const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex')
          if(hash == key){
            console.log("Password found: " + password)
            return
          }    
        }
    }
  }
  console.log("Password not found")
}

function getCharacter(n){
  if(n<10){
    return String.fromCharCode(48+n)
  }
  else if(n<26){
    return String.fromCharCode(97+n)
  } 
  else if(n<52){
    return String.fromCharCode(65+n-26)
  }
  else throw "n must be between 0 and 51"

}

passcrack()
