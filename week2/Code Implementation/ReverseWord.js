let kalimat = 'Saya Belajar Javascript'
let toArray = kalimat.split(" ")
let reversedWord = []

for(let x = (kalimat.length-1); x >=0; x--)
{
  reversedWord.push(toArray[x])
}

console.log(reversedWord.join(" "))