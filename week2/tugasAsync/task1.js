const cariHariKerja = (day) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=> {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

//THEN-CATCH
cariHariKerja('jumat').then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})

//TRY-CATCH
const getData = async()=>{
    try {
        let result = await cariHariKerja('sabtu')
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
getData()