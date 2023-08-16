const valid_user = require('./name');
// console.log(valid_user)

// const user = prompt('whats your name')
const readline  = require('readline').createInterface({
    input: process.stdin,
    output :process.stdout
})
readline.question('whats ur name?',user =>{
    console.log(`Hi ${user}`)
    
    if(valid_user.valid_user.includes(user))
    {   
        console.log(`Welcome ${user}.`)
        readline.close();
    }
    else
    {
        console.log(`No Access provided to ${user}`)
        readline.close()
    }
}
)

require('./paths')

