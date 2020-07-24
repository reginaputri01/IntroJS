const cariHariKerja = (day) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=> {
                return item === day.toLowerCase()
            })
            if(cek){
                resolve(`${cek} adalah hari kerja`)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

//THEN-CATCH
//THEN untuk mengelola hasil sukses(resolve)
//CATCH untuk mengelola hasil gagal(reject)
cariHariKerja('Jumat').then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})

//TRY-CATCH
//TRY biasanya kita sisipkan code javascript yang mungkin terjadi error 
//CATCH adalah blok yang akan menangkap error yang terjadi pada blok Try apabila pada blok Try si error muncul
const getData = async(day)=>{
    try {
        const result = await cariHariKerja(day)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
getData('sabtu')