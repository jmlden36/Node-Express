//Asynchronous version of read write
const { readFile, writeFile, read } = require('fs')

console.log('start')
readFile('./content/first.txt','utf-8', (err,result)=>{
  if(err){
    console.log(err.message)
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result)=> {
    if(err) {
      console.log(err)
      return
    }
    const second = result
    writeFile('./content/result-async.txt', 
    `Here is the result : ${first}, ${second}`,
    (err,result)=>{
      if(err){
        console.log(err)
        return;
      }
      console.log('done with this task writeFile')
    }
    )
  })
})
console.log('starting next task')
// this log shows how the single threading works to offload a task after starting it
// alternatives to this are async await