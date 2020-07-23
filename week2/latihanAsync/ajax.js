const getDataPost = (url, method) => {
    return new Promise((resolve, reject)=>{
        const ajax = new XMLHttpRequest();
        const linkUrl = url
        ajax.open(method, linkUrl)
        ajax.send();
        ajax.onreadystatechange = function() {
            if(ajax.status === 200){
                const result = JSON.parse(ajax.responseText)
                resolve(result)
            }else{
                reject("error")
            }
            
        }
    })
}

// const funCallback = (data) =>{
//     const result =data;
//     result.map((item)=>{
//         console.log(item.title)
//     })
// }

getDataPost("https://jsonplaceholder.typicode.com/posts", "GET")
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})