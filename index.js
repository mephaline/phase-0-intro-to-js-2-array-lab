// Write your solution here!
let cats = ['Milo','Otis','Garfield"'];

function destructiveAppendCat(name) {
    cats.push (name);
}
//
function destructivelyPprependCat(name) {
    cats.unshift(name);
}
//
function destructivelyRemoveLastCat() {
    cats.pop();
}
//
function destructivelyRemoveFirstCat() {
    cats.shift();
}
//
function appendCat(name) {
    return [...cats, name];
}
//
function appendCat(name) {
    return [name, ...cats];
}

function removeFirstCat() {
    return cats.slice(1);
}


beforeEach(function() {
    cats = ['Milo', 'Otis', 'Garfield'];
});


function appendCat(name){
    return [...cats, name];

}

function prependCat(name){
    return[name, ...cats];

}


cats = prependCat(cats);
console.log(cats);


cats.pop();
console.log(cats);