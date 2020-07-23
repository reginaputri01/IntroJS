const promise = new Promise((resolve, reject)=>{
    let statusSuccess = true;
    if(statusSuccess){
        let result = 'sukses'
        resolve(result)
    } else {
        reject(new Error('error'))
    }
})

promise.then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})