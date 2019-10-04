'use strict'


const products = [
    {id:1, name: 'prod-1'}, 
    {id:2, name: 'prod-2'},
    {id:3, name: 'prod-3'},
    {id:4, name: 'prod-4'},
    {id:5, name: 'prod-5'},
    {id:6, name: 'prod-6'},
]

const productManager = {
    products: [],
    cart: {},
    container: {},
    createCartProduct: function (event) {
        

        const id = +event.currentTarget.dataset.productId;
        const product = products.find(p => p.id === id);
        
        const wrap = document.createElement('div');
        wrap.className = 'cart-product';

        
    
        const h2 = document.createElement('h2');
        h2.innerHTML = product.name;
    
        wrap.appendChild(h2);

        cart.appendChild(wrap);

    },

    render: function () {
        const create = this.createCartProduct.bind(this);
        for (let product of this.products) {
            const wrap = document.createElement('div');
            wrap.className = 'product';

            wrap.onclick = this.createCartProduct;

            wrap.dataset.productId = product.id;

            const h2 = document.createElement('h2');

            h2.innerHTML = product.name;

            wrap.appendChild(h2);

            this.container.appendChild(wrap);
        }
    }

};





productManager.container = document.querySelector('#products');

productManager.cart = document.querySelector('#cart');

productManager.products = products;

productManager.render();

function view () {
    console.log(this);
}

const cont = document.querySelector('#main');

cont.onclick = view;



/*
const ar = ['1', '2'];


let ar2 = ar;

ar2.push = '312312';

ar2 = {name: 'Vasa'};

console.log(ar);
*/