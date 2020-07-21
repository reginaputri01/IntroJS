function searchName(item, limit, callback) {
    const name = [
        'Abigail', 'Alexandra', 'Alison', 'Amanda', 
        'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 
        'Olivia', 'Penelope'
    ]
    const search =  name.filter(function(val){
        return val.toLowerCase().indexOf(item.toLowerCase()) > -1
    })
    callback(search, limit)
}

const limitPrint = (data, limit) => {
    let result = data.slice(0, limit)
    console.log(result)
}

searchName('an', 3, limitPrint)


    
    