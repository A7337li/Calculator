const $ = document;
const box = $.getElementById('inp');
let numb = [];

const Entrance = (x) => box.value += x;

const clean = (y) => {
    box.value = y;
    numb.splice(0);
}

function total() {
    box.value = eval(box.value);
}