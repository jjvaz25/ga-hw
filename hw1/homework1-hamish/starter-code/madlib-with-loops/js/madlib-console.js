let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Tinder', 'Tesla'];
let startupY = ['Donkeys', 'Santa', 'The 50s!', 'Elves', 'some guy called Stephen', 'Racoon Lovers'];

// let random1 = Math.floor((Math.random() * startupX.length));
// let random2 = Math.floor((Math.random() * startupY.length));

const xForY = document.getElementById('xForY')
const favStore = document.getElementById('favorites')
let favourite = [];
let store = [];

let dummy = document.getElementById("dummy");

const generate = document.querySelector('#create')
generate.addEventListener('click', create)

function create(){
    let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));
    
favourite.splice (0,100,`A startup that is <b>${startupX[random1]}</b> but for <b>${startupY[random2]}</b>`);

// favourite.splice (0,100,'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

    xForY.innerHTML = favourite;
    dummy.remove();

}

let fav = document.querySelector('#save')
fav.addEventListener('click', save)

function save(){
    store = document.getElementById('xForY').textContent;
}

let cat = "cat"

let printer = document.querySelector('#print')
printer.addEventListener('click', print)

function print(){
    // favStore.innerText = "";
    favStore.innerText = store;
    console.log(store)
}


