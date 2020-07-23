function searchName(item, limit, callback) {
    const name = [
        'Abigail', 'Alexandra', 'Alison', 'Amanda', 
        'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 
        'Olivia', 'Penelope'
    ]
    const dataFilter =  name.filter((index) => {
        return index.toLowerCase().indexOf(item.toLowerCase()) > -1
    })
    if(dataFilter != 0){
        callback(dataFilter, limit)
    }else{
        console.log("Data tidak ditemukan")
    }
    
}

const limitPrint = (data, limit) => {
    let result = data.slice(0, limit)
    console.log(result)
}

searchName('a', 3, limitPrint)


    
    