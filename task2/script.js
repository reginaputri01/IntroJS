const mtk = 95;
const ipa = 78;
const bahasaIndonesia = 85;
const bahasaInggris = 75;

const rata = (mtk+ipa+bahasaIndonesia+bahasaInggris) / 4;
console.log(`Rata-rata = ${rata}`)

if(rata >= 90 && rata <= 100) {
    console.log("Grade = A")
} else if(rata >= 80 && rata <= 89) {
    console.log("Grade = B")
} else if(rata >= 70 && rata <= 79) {
    console.log("Grade = C")
} else if(rata >= 60 && rata <= 69) {
    console.log("Grade = D")
} else if(rata >= 0 && rata <= 59){
    console.log("Grade = E")
} else {
    console.log("Tidak Ada Grade")
}