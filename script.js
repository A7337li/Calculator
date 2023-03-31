const $ = document;
const box = $.getElementById('inp');
let numb = [];

function myfunction(x) {
    box.value += x;
}

function clean(y) {
    box.value = y;
    numb.splice(0);
}

function total() {
    numb.push(box.value);
    alert(numb);
}

