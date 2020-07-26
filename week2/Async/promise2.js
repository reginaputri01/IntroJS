const callc = (num1, num2) => {
    return new Promise((resolve, reject)=>{
        if(typeof num1 === "number" && typeof num2 === "number"){
            setTimeout(()=>{
                let result = num1 + num2
                resolve(result)
            }, 3000)
        }else{
            const error = "inputan harus number"
            reject(error)
        }
    })
}

callc(10, 30).then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})