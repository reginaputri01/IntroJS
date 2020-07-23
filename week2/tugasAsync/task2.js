const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const printMonth = (item, data) => {
    let result = data;
    result.map((item)=>{
        console.log(item)
    })
}

getmonth(printMonth)