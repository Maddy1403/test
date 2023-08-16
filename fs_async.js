const {readFile,writeFile}= require('fs');

readFile('./contents/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
console.log(result)
const first = result


writeFile('./contents/test1.txt',`This is me.${first} `,(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
})
}
)
