const {readFileSync, writeFileSync}=require('fs')
console.log('start');
 const first=readFileSync('./content/first.txt','Utf8')
 const second=readFileSync('./content/second.txt','Utf8')
writeFileSync('./content/result-sync.txt',`here is the result :${first},${second}`,{flag:'a'})
console.log('done with this task');
console.log('starting the next one');