const $ = document;
const box = $.getElementById('inp');
let numb = [];

const myfunction = (x) => {
    box.value += x;
}

const clean = (y) => {
    box.value = y;
    numb.splice(0);
}

const total = () => {
    numb.push(box.value);
    alert(numb);
}

