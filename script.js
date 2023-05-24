const $ = document;
const box = $.getElementById('inp');
const box2 = $.getElementById('inp2');
let po, per, eva = false;

function Entrance(x) {
    box.value += x;

    if (po) {
        let sp = box.value.split("^");
        box2.value = Math.pow(sp[0], sp[1]);
    } else if (per) {
        let pe = box.value.split("%*");
        box2.value = pe[0] / 100 * pe[1];
    } else if (eva) {
        box2.value = eval(box.value);
    }

}

function clean() {
    box.value = "";
    box2.value = "";
    po, per, eva = false;
}

function cleanle() {
    let len = box.value.length;
    box.value = box.value.substr(0, len - 1);
}

function total() {
    box.value = box2.value;
    box2.value = "";
    po, per, eva = false;
}

function mathfa(ma) {
    if (ma == "Percent") {
        per = true;
        box.value += "%*";
    } else if (ma == 'pow') {
        po = true;
        box.value += "^";
    } else if (ma == 'sqrt' || ma == 'abs' || ma == 'round' || ma == 'ceil' || ma == 'floor') {
        box2.value = Math[ma](box.value);
    } else {
        eva = true;
        box.value += ma;
    }
}
