const $ = document;
const box = $.getElementById('inp');

const Entrance = (x) => box.value += x;

const clean = (y) => {
    box.value = y;
}

function total() {
    box.value = eval(box.value);
}