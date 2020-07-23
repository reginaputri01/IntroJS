//satu
const score = (mtk, ipa, bIng) => {
    return new Promise((resolve, reject)=>{
        if(typeof mtk === "number" && typeof ipa === "number" && typeof bIng === "number"){
                let result = (mtk + ipa + bIng) / 3
                resolve(`Your score is ${result}`)
        }else{
            const error = "Inputan harus bertipe number"
            reject(error)
        }
    })
}

score(90, 80, 70).then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

//dua
const hello = (namaLengkap, namaPanggilan) => {
    return new Promise((resolve, reject)=>{
        if(typeof namaLengkap === 'string' && typeof namaPanggilan === 'string'){
                resolve(`Hallo, saya ${namaLengkap} biasanya dipanggil ${namaPanggilan}`)
        }else{
            const error = "Inputannya harus bertipe string guyss.."
            reject(error)
        }
    })
}

hello('Regina Putri', 'Putri').then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})