const seleksiNilai= (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal<nilaiAkhir){
        const result = dataArray.filter((number) => {
            return number >= nilaiAwal && number <=nilaiAkhir
        })
        if(result.length > 0){
            result.sort((a, b) => {
                return a-b
            })
            console.log(result)
        }else{
            console.log('Jumlah angka dalam dataArray tidak ada')
        }
    }else{
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    }
}

seleksiNilai(5, 6 , [2, 25, 4, 14, 17, 30, 8])
