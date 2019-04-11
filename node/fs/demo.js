// fs模块   是node后端开发的一部分
const fs = require('fs');
// 读取文件是异步的，
// fs.readFile('./a.txt','utf8',function(err,data){
//     console.log(data);
//     fs.readFile('./b.txt','utf8',function(err,data){
//         console.log('-------------',data);
//     })
// })

// fs.readFile('./c.txt','utf8',function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data);
//     fs.readFile('./b.txt','utf8',function(err,data){
//         console.log('-------------',data);
//     })
// })

// 将callback处理异步的方案抛弃，
const fileAPromise = new Promise((resolve,reject)=>{
    // 花时间的诺言
    fs.readFile('./a.txt','utf8',function(err,data){
        // 流程的控制权怎么移交
        resolve(data);
    })
})

const fileBPromise = new Promise((resolve,reject)=>{
  fs.readFile('./b.txt','utf8',function(err,data){
    if(err){
      reject(err);
    }else{
      resolve(data);
    }
  })
})
// 将内部的耗时内务运行起来
fileAPromise
    .then(data => {
      console.log(data);
      return fileBPromise;
    }) 
    .then(data =>{
      console.log(data);
    })