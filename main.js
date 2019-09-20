'use strict';

var data = [
    { name: 'Home', link: '/' },
    { name: 'Gallery', link: 'page/gallery' },
    { name: 'Contacts', link: 'page/contacts' },
    { 
        name: 'Catalog', 
        link: 'page/catalog',
        child: [
            { name: 'Content-1', link: 'page/content-1' },
            { name: 'Content-2', link: 'page/content-2' },
            { name: 'Content-3', link: 'page/content-3' },
        ]
    },
    { name: 'Support', link: 'page/support' },
    { name: 'About as', link: 'page/about-as' },
]




function hover(ev) {
    console.log(ev);
}

var ul = document.querySelector('#menu');

var html = ``;

data.forEach(function(item) {
   
    var childHtml = '';

    if(item.child) {
        childHtml += '<ul>';
        item.child.forEach(function(item) {
            childHtml += `<li><a href=${item.link}>${item.name}</a></li>`;
        });
        childHtml += '</ul>';
        
    } 
    
    var event = item.child ? 'class="drop"' : '';

    html += `<li ${event} ><a href=${item.link}>${item.name}</a>${childHtml}</li>`;
})

ul.innerHTML = html;

































/*
var btn = document.querySelector('#mybtn');
var con = document.querySelector('#container');

var counter = 0;

btn.onclick = function () {
    counter ++;
    con.innerHTML += `<p>${counter}Good job</p>`;
}
*/



// console.dir(document.querySelector('#main'));

/*
var a = prompt ('Enter number');

var b = prompt ('Enter number 2')

function num () {
    a + b;
}

num();


console.log(num);

*/















/*
function BuildCar (nameCar) {
    var car = {name: nameCar, doors:4};
    console.log(this);
    return car;
}

var a6 = new BuildCar ('Audi-6');

var a8 = new BuildCar ('Audi-8');



console.log(a8);
*/


















/*var names = [ 'vas' , 'is' , 'das' , 'af'];
var cities = [ 'Kiev' , 'Dnipro' , 'Kharkov' , 'Odesssssa'];


var User = [];

console.log(typeof User);

*/





/*var Cart = {};



Cart.send = function () {
    alert('send products');
}


Cart.valid = function() {
    alert();
}


console.log(cart);*/

/*function Show (a, b) {
    var s = a * a + b * b;   
    return s;
}

var r = Show(2, 4);

console.log(r);
*/
//console.log(Show);


//names.push('Kann','KiFir');

//names.unshift('Yol', 'Lex');

//names.shift();
//names.pop();

//names.splice();

//var newNames = names.slice(1, 4);


//function Show (ar) {
//     for(var v of ar) {
//        alert(v);
//    }
//}


