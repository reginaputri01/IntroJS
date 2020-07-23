//Built-in Function Javascript
//1. pop() -> untuk menghapus elemen terakhir dari array, dan mengembalikan elemen itu
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.pop()
console.log(fruits)

//2. find() -> untuk mengembalikan nilai dari elemen pertama dalam array yang memenuhi ketentuan 
const number = [3, 10, 18, 17]
const findArray = number.find(item => item > 17);
console.log(findArray)

//3. from() -> untuk mengembalikan objek Array dari objek apa pun dengan properti panjang atau objek yang dapat diulang
const myArr = Array.from("ABCDEFG");
console.log(myArr)

//4. includes() -> untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak
const angka = [1, 2, 3, 4, 5, 6]
const something = angka.includes(7);
console.log(something);

//5. some() -> untuk mengecek sekurang kurangnya salah satu elemen array memenuhi kondisi
const angka2 = [1, 2, 3, 4, 5]
const cek = angka2.some(item => item > 0);
console.log(cek);

//6. every() -> untuk mengecek apakah setiap elemen dalam array memenuhi kondisi
const angka3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const test = angka3.every(item => item > 2);
console.log(test);

//7. reduce() -> untuk mereduce elemen array menjadi single value dengan menjumlah setiap elemen
const angka4 = [1, 2, 3, 4, 5];
const sum = angka4.reduce((total, value) => total + value, 0); 
console.log(sum);

//8. join() -> untuk menggabungkan semua elemen dari sebuah array menjadi sebuah string
var a = ['Angin', 'Air', 'Api'];
var variabel2 = a.join('+');
console.log(variabel2)

//9. concat() -> untuk menggabungkan 2 array menjadi 1 array
const buah = ['apel', 'banana', 'mango']
const number2 = [1, 2, 3]
const newArray = buah.concat(number2);
console.log(newArray);

//10. slice() -> untuk mengembalikan elemen yang dipilih dalam array, sebagai objek array baru
const buah2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const tes = buah2.slice(1, 3);
console.log(tes)