
var url = 'http://blog.api.axenov-it.com/posts';

function filter (reponce) {
    return reponce.json();
}

function render (data) {
    var conteiner = document.querySelector('#list-posts');
    data.forEach(function(post) {
        var template = document.createElement('div');
        template.className = 'post';
        
        var likes = document.createElement('i');
        likes.innerHTML = post.likes;

        var h2 = document.createElement('h2');
        h2.innerHTML = post.title;

        var p = document.createElement('p');
        p.innerHTML = post.description;

        template.append(h2, p, likes);


        conteiner.appendChild(template);
    })
}



fetch(url)
    .then(filter)
    .then(render);



















/*

var t = document.querySelector('#test');


t.onclick = function() {
    alert('hi');
}

t.innerHTML = '<p><h1>dadsadd</h1></p>';


var cont = document.querySelector('#conteiner')

var btn = document.createElement('button');
btn.onclick = showbtn;
btn.innerHTML = 'click me';

function showbtn() {
    console.log(this);
}

cont.appendChild(btn);

*/