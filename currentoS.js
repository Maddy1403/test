const Cos = require('os')

const  currentOS = {
    
    type : Cos.type(),
    release : Cos.release(),
    // name : Cos.name(),
    TotalMem : Cos.totalmem(),
    FreeMem :Cos.freemem()



}

console.log(currentOS)