'use strict'


const ar = [
    {id:1, name: 'prod-1'}, 
    {id:2, name: 'prod-2'},
    {id:3, name: 'prod-3'},
    {id:4, name: 'prod-4'},
    {id:5, name: 'prod-5'},
]

const container = document.querySelector('#products');

const cart = document.querySelector('#cart');

ar.forEach(product => {
    const wrap = document.createElement('div');
    wrap.className = 'product';

    wrap.onclick = function () {
        const id = +this.dataset.productId;
        const product = ar.find(p => p.id === id);
        
        const wrap = document.createElement('div');
        wrap.className = 'cart-product';
        
        const h2 = document.createElement('h2');
        h2.innerHTML = product.name;
        
        wrap.appendChild(h2);

        cart.appendChild(wrap);

        console.log(id);
    }

    wrap.dataset.productId = product.id;

    const h2 = document.createElement('h2');

    h2.innerHTML = product.name;

    wrap.appendChild(h2);

    container.appendChild(wrap);
})












/*
const ar = ['1', '2'];


let ar2 = ar;

ar2.push = '312312';

ar2 = {name: 'Vasa'};

console.log(ar);
*/