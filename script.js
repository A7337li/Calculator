const $ = document;
const box = $.getElementById('inp');
let numb = [];

const Entrance = (x) => box.value += x;

const clean = (y) => {
    box.value = y;
    numb.splice(0);
}

function Sum(z) {
    numb.push(box.value);
    box.value = z;

    let nima = numb.map(function(str){
        return parseFloat(str);
    });

    let result = nima.reduce((a,b) => {
        return a + b;
    },0); 
    
    return(result);
}

function equ() {
    box.value = Sum();
}