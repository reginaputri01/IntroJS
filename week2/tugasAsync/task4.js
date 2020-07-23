const getName = (callback) => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> {
            return res.json()
        })
        .then((user)=>{
            callback(user)
        })
    })
}

const printName = (data) => {
    let result = data;
    result.map((item)=>{
        console.log(item.name)
    })
}

getName(printName).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})