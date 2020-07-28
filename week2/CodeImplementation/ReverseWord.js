const text = 'Saya Belajar Javascript'
const toArray = kalimat.split(" ")
const result = []

for(let x = (kalimat.length-1); x >=0; x--)
{
  result.push(toArray[x])
}

console.log(result.join(" "))