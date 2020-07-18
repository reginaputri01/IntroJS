let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//tugas a
const data2= {
    name: "Regina Putri Arinda",
    email: "reginaputria2003@gmail.com",
    hobby: "mendengarkan musik, tidur"
}

const output = {...data, ...data2};
console.log(output)

//tugas b
const {street, city} = data.address;
console.log(street, city)
