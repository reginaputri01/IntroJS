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
//then-catch
score(90, 80, "70").then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
//try-catch
const getScore = async()=>{
    try {
        const result = await score(70, 70, 80)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
getScore()


//dua
const hello = (namaLengkap, namaPanggilan) => {
    return new Promise((resolve, reject)=>{
        if(typeof namaLengkap === 'string' && typeof namaPanggilan === 'string'){
                resolve(`Hallo, saya ${namaLengkap} biasanya dipanggil ${namaPanggilan}`)
        }else{
            const error = "Inputannya harus bertipe string"
            reject(error)
        }
    })
}
//then-catch
hello('Regina Putri Arinda', 'Putri').then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
//try-catch
const getName = async()=>{
    try {
        const result = await hello('Regina Putri', 'Putri')
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
getName()