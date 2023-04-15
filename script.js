const $ = document;
const box = $.getElementById('inp');
let numb = [];

const myfunction = (x) => box.value += x;

const clean = (y) => {
    box.value = y;
    numb.splice(0);
}

function total(z) {
    numb.push(box.value);
    box.value = z;

    let nima = numb.map(function(str){
        return parseInt(str);
    });

    let result = nima.reduce((a,b) => {
        return a + b;
    },0);    
}

function equ() {
    // alert(total(""));
}