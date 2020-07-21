const printSegitiga = "lima"

if (typeof printSegitiga === 'number'){
    for(let i=printSegitiga; i>=1; i--){
        let tampung = "";
        for(let j=1; j<=i; j++){
            tampung += j
        }
        console.log(tampung);
    }
} else {
    console.log("Data harus number")
}
