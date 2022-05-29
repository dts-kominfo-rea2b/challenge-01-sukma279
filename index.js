// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const favoriteColorM = new Set(["Yellow", "Pink", "White", "Purple"]);
const favoriteColorW = new Set(["Blue", "Black", "Grey"]);

const favoriteRestaurantM = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);
const favoriteRestaurantW = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);

const educationM = [
    {
        
        name: "SD 01",
        city: "Jakarta",
        graduate: 2016
    },
    {
        name: "SMP 02",
        city: "Jakarta",
        graduate: 2019
    },
    {
        name: "SMA 03",
        city: "Tangerang"
    }
];
const educationW = [
    {
        name: "SD 02",
        city: "Jakarta",
        graduate: 2010
    },
    {
        name: "SMP 03",
        city: "Bogor",
        graduate: 2013
    },
    {
        name: "SMA 01",
        city: "Surabaya",
        graduate: 2016
    },
    {
        name: "Universitas Maju", 
        city: "Tangerang"
    }
];

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: Array.from(favoriteColorM),
    isHavePet: "Yes",
    education: educationM,
    favoriteRestaurant: Array.from(favoriteRestaurantM)
};
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: Array.from(favoriteColorW),
    isHavePet: "No",
    education: educationW,
    favoriteRestaurant: Array.from(favoriteRestaurantW)
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};