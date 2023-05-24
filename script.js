const $ = document;
const box = $.getElementById('inp');
const box2 = $.getElementById('inp2');
let po = false;
let per = false;

function Entrance(x) {
    box.value += x;

    if (po) {
        let sp = box.value.split("^");
        box2.value = Math.pow(sp[0], sp[1]);
    } else if (per) {
        let pe = box.value.split("%*");
        box2.value = pe[0] / 100 * pe[1];
    }

}

function clean(y) {
    box.value = y;
    box2.value = y;
    per = false;
    po = false;
}

const total = () => box2.value = eval(box.value);

function mathfa(ma) {
    if (ma == "Percent") {
        per = true;
        box.value += "%*";
    } else if (ma == 'pow') {
        po = true;
        box.value += "^";
    } else {
        box2.value = Math[ma](box.value);
    }
}
