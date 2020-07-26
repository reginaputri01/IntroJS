const getName = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> {
        return res.json()
    })
    .then((user)=>{
        let result = user;
        result.map((item)=>{
            console.log(item.name)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

getName()