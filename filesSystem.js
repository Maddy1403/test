const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./contents/first.txt','utf8')
console.log(first)

writeFileSync('./contents/test.txt',  
`${first} 
    Work always pays.Therefore,one must work.Work is worship. `, {flag : 'a'}
     )