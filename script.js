const menu = [
    { id: 1, name: "Nasi Goreng", price: 20000, img: "666.png" },
    { id: 2, name: "Mie Ayam Bakso", price: 18000, img: "555.png" },
    { id: 3, name: "Ayam Geprek", price: 15000, img: "999.png" },
    { id: 4, name: "Bakso Spesial", price: 17000, img: "077.png" }

    
];

function loadMenu() {
    const container = document.getElementById("menuList");
    menu.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Rp ${item.price.toLocaleString()}</p>
                <button onclick="pesan('${item.name}')">Pesan</button>
            </div>
        `;
    });
}

function pesan(makanan) {
    alert("Anda memesan: " + makanan);
}

loadMenu();

const minuman = [
    { id: 1, name: "Es Teh Manis", price: 8000, img: "esteh.png" },
    { id: 2, name: "Es Jeruk", price: 9000, img: "000.png" },
    { id: 3, name: "Lemon Tea", price: 10000, img: "897.png" },
    { id: 4, name: "Jus Alpukat", price: 12000, img: "122.png" },
    { id: 5, name: "Jus Mangga", price: 13000, img: "mangga.png" }
];

function loadMinuman() {
    const container = document.getElementById("minumanList");
    minuman.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Rp ${item.price.toLocaleString()}</p>
                <button onclick="pesanMinuman('${item.name}')">Pesan</button>
            </div>
        `;
    });
}

function pesanMinuman(nama) {
    alert("Anda memesan: " + nama);
}

loadMinuman();


