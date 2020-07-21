//Built-in Function Javascript
//1. forEach() -> untuk melakukan pengulangan di dalam array
// const array = [1, 2, 3, 4, 5]
// array.forEach(item => { 
//   console.log(item);
// });

//2. filter() ->  untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada
// const angka = [1, 2, 3, 4, 5, 6]
// const filteredArray = angka.filter(item => item % 3 === 0);
// console.log(filteredArray)

//3. map() -> untuk membuat array baru sekaligus melakukan operasi terhadap setiap elemen array
// const angka = [1, 2, 3, 4, 5, 6]
// const multipleOfTwo = angka.map(e => e * 3);
// console.log(multipleOfTwo);

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

//8. sort() -> untuk mengurutkan elemen pada array
// const angka = [20, 43, 3, 6, 9]
// const descOrder = angka.sort((a, b) => a > b ? 1 : -1);
// console.log(descOrder);

//9. concat() -> untuk menggabungkan 2 array menjadi 1 array
// const fruits = ['apel', 'banana', 'mango']
// const number = [1, 2, 3]
// const newArray = fruits.concat(number);
// console.log(newArray);

//10. Array.of() -> untuk membuat array dari setiap argumen yang dipassing
// const angka = Array.of(1, 2, 3, 4, 5, 6);
// console.log(angka);