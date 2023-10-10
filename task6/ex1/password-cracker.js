const crypto = require('crypto')

function passcrack(){
  let password = ''
  const salt = 'Saltet til Ola'
  const iterations = 2048
  const key = "ab29d7b5c589e18b52261ecba1d3a7e7cbf212c6"
  const keylen = key.length / 2
  const digest = 'sha1'

  //nothing found up until i = 2, set start = 3

  for(let i = 3; i<26; i++){
    console.log(i)
    for(let j = 0; j<26; j++){
        for(let k=0; k<26; k++){
          for(let l=0; l<26; l++){
            for(let m=0; m<26; m++){
              password = String.fromCharCode(97+i, 97+j, 97+k, 97+l, 97+m)
              const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex')
              if(hash == key){
                console.log("Password found: " + password)
                return
              }
            }
          }
        }
    }
  }
  console.log("Password not found")
}

passcrack()
