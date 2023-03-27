/*const amount=9
if(amount<10){
    console.log('small number')
}
else{
    console.log('large number')
}
console.log(`hey its my first node app`)*/

/*GLOBAL - NO WINDOW !!!!

__dirname - path to current directory
__filename - file name
require - function to use modules(CommonJS)
module - info about current module(file)
process - info about env where the program is being executed*/


/*setTimeout(()=>{
    console.log("hello world")

},1000)*/

//MODULES-Encapsulated Code(only share minimum)
/*const secret='SUPER SECRET'
const john='john'
const peter='peter'
const sayHi=(name)=>{
    console.log(`hello there ${name}`)
}*/


/*const names= require('./4-names')
const sayHi= require('./5-utils')
const data= require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)*/

/*const os =require('os')

//info about current user
const user=os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`The System Update is ${os.uptime()}seconds`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)*/


/*const path=require('path')


console.log(path.sep);
const filePath=path.join('./content/','subfolder','test.txt')
console.log(filePath);

const base=path.basename(filePath)
console.log(base)

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);*/


/*const {readFile, writeFile}=require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second =result;
        writeFile('./content/result-async.txt',`here is the result :${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        })
    })
})*/

/*const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='./about'){
        res.end('Here is out short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to find the pafe you are looking for</p>
    <a href="/">back home<a>`)
})
server.listen(5000)*/


//npm =global command,comes with node
//npm --version

// local dependency-use it only in this particular project
// npm i <packageName>

//global dependency- use it in any project 
// npm install -g <packageName>
//sudo install -g <packageNmae> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm inti -y (everything default)



const _= require('lodash')

const items= [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);