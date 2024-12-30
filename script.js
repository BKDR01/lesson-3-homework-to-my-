    let apiUrl = 'https://fakestoreapi.com/products';
    let row = document.querySelector('#row')
    let rowDiv = document.querySelector('#rowDiv')


    function Glfunc() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(product => {
             let productElement = document.createElement('div');
             productElement.innerHTML = `
                        <div class="w-[400px] h-[500px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-6 rounded-lg bg-white bg-white text-center">
                    <img src="${product.image}" class="mx-auto w-[200px] h-[200px]" alt="">
                    <h2 class="font-bold my-[10px]">${product.title}</h2>
                    <p class="text-[10px] my-[10px]">${product.description}</p>
                    <div class="flex justify-between items-center mx-auto  w-[130px] h-[50px]">
                        <h2 class="text-green-500 mx-auto">${product.price} $</h2>
                        <button class="w-[50px] h-[30px] rounded-[10px] bg-green-500 text-white my-[20px] mx-auto" onclick="countPrice()">Buy</button>
                    </div>
                </div> `;

     row.append(productElement)

});})}

Glfunc();

function countPrice(index, products) {
    
    let h1 = document.createElement('h1')
    h1.innerHTML = ''

     h1.innerHTML = `Total Price: ${priceTotal.toFixed(2)}`;

    rowDiv.append(h1)
}