//Built-in Function Javascript
//1. pop() -> untuk menghapus elemen terakhir dari array, dan mengembalikan elemen itu
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.pop()
// console.log(fruits)

//2. find() -> untuk mengembalikan nilai dari elemen pertama dalam array yang memenuhi ketentuan 
// const angka = [3, 10, 18, 20]
// const findArray = angka.find(item => item >= 18);
// console.log(findArray)

//3. from() -> untuk mengembalikan objek Array dari objek apa pun dengan properti panjang atau objek yang dapat diulang
// const myArr = Array.from("ABCDEFG");
// console.log(myArr)

//4. includes() -> untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak
// const angka = [1, 2, 3, 4, 5, 6]
// const something = angka.includes(7);
// console.log(something);

//5. some() -> untuk mengecek sekurang kurangnya salah satu elemen array memenuhi kondisi
// const angka = [1, 2, 3, 4, 5]
// const thing = angka.some(item => item < 0);
// console.log(thing);

//6. every() -> untuk mengecek apakah setiap elemen dalam array memenuhi kondisi
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const greaterFive = angka.every(item => item > 0);
// console.log(greaterFive);

//7. reduce() -> untuk mereduce elemen array menjadi single value dengan menjumlah setiap elemen
// const angka = [1, 2, 3, 4, 5];
// const sum = angka.reduce((total, value) => total + value, 0); 
// console.log(sum);

//8. join() -> untuk mengurutkan elemen pada array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.join()
// console.log(result)

//9. concat() -> untuk menggabungkan 2 array menjadi 1 array
// const fruits = ['apel', 'banana', 'mango']
// const number = [1, 2, 3]
// const newArray = fruits.concat(number);
// console.log(newArray);

//10. slice() -> untuk mengembalikan elemen yang dipilih dalam array, sebagai objek array baru
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus)