const fs = require("fs");

//file write sync
// fs.writeFileSync('File.txt',"hello my name is Akshxar")

//read file sync
// const result = fs.readFileSync('File.txt', "utf-8");
// console.log("File Data : ", result);




//file write async
fs.writeFile('File.txt','Hello',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File created")
    }
})

//read file async
fs.readFile('File.txt',"utf-8",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("read data: ", result)
    }
})


//copy a file:
fs.cpSync('File.txt','Copy.txt  ')

