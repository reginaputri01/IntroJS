const name = [
    'Abigail', 
    'Alexandra', 
    'Alison',
    'Amanda', 
    'Angela', 
    'Bella',
    'Carol', 
    'Caroline', 
    'Carolyn',
    'Deirdre', 
    'Diana', 
    'Elizabeth',
    'Ella', 
    'Faith', 
    'Olivia', 
    'Penelope'
]
function printName(data) {
    console.log(`${data}`)
}

function searchName(item, callback) {
    const result =  name.filter(function(val){
            return val.toLowerCase().indexOf(item.toLowerCase()) > 1;
    })
    callback(result)
}
searchName('an', printName)


    
    