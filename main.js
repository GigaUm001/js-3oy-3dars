let apiurl = 'https://fakestoreapi.com/products?limit=10';
let rowDiv = document.querySelector('#row');
let body = document.querySelector('body');
let priceTotal = 0;
let products = [];

async function getData() {
    try {
        let data = await fetch(apiurl);
        let response = await data.json();
        products = response;
        products.map((item, index) => {
            let card = document.createElement('div');
            card.classList.add('w-[400px]', 'p-4', 'text-center', 'flex', 'flex-col', 'justify-center', 'mb-2');

            card.innerHTML = `
                <img class="w-[200px] h-[200px] mx-auto" src="${item.image}" alt="${item.title}">
                <p class="text-2xl font-bold">${item.title}</p>
                <p>${item.description}</p>
                <div class="flex gap-4">
                    <p class="text-green-500">${item.price}</p>
                    <button onclick="countPrice(${index})" class="bg-green-500 text-white text-2xl">Buy</button>
                </div>
            `;
            rowDiv.append(card);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function countPrice(index) {
    let h1 = document.createElement('h1');
    h1.innerHTML = '';

    priceTotal += products[index].price;

    h1.innerHTML = `Total Price: $${priceTotal.toFixed(2)}`;
    body.append(h1);
}

getData();
