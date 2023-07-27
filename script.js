'use strict'

const $ = document;
const box = $.getElementById('inp');
const box2 = $.getElementById('inp2');
let po, per, eva = false;

function mathfa(ma) {
    if (ma == "Percent") {
        po = false;
        eva = false;
        per = true;
        if (box.value.indexOf("^") == -1
            && box.value.indexOf("+") == -1
            && box.value.indexOf("-") == -1
            && box.value.indexOf("*") == -1
            && box.value.indexOf("/") == -1
            && box.value.indexOf("%") == -1) {
            box.value += "%*";
        } else {
            box.value = box2.value + "%*";
        }

    } else if (ma == 'pow') {
        per = false;
        eva = false;
        po = true;
        if (box.value.indexOf("^") == -1
            && box.value.indexOf("+") == -1
            && box.value.indexOf("-") == -1
            && box.value.indexOf("*") == -1
            && box.value.indexOf("/") == -1
            && box.value.indexOf("%") == -1) {
            box.value += "^";
        } else {
            box.value = box2.value + "^";
        }
    } else {
        po = false;
        per = false;
        eva = true;
        box.value += ma;
    }
}

function Entrance(x) {
    box.value += x;

    if (per) {
        let pe = box.value.split("%*");
        box2.value = pe[0] / 100 * pe[1];
    } else if (po) {
        let sp = box.value.split("^");
        box2.value = Math.pow(sp[0], sp[1]);
    } else if (eva) {
        box2.value = eval(box.value);
    }

}

function SingleOperation(oper) {
    if (box.value.indexOf("^") == -1
        && box.value.indexOf("+") == -1
        && box.value.indexOf("-") == -1
        && box.value.indexOf("*") == -1
        && box.value.indexOf("/") == -1
        && box.value.indexOf("%") == -1) {
        box2.value = Math[oper](box.value);
    } else {
        box2.value = Math[oper](box2.value);
    }
}

function clean() {
    po = false;
    per = false;
    eva = false;
}

function cleanle() {
    let len = box.value.length;
    box.value = box.value.substr(0, len - 1);
    if (box.value.indexOf("^") == -1
        && box.value.indexOf("+") == -1
        && box.value.indexOf("-") == -1
        && box.value.indexOf("*") == -1
        && box.value.indexOf("/") == -1
        && box.value.indexOf("%") == -1) {
        po = false;
        per = false;
        eva = false;
    }
}

function total() {
    box.value = box2.value;
    box2.value = "";
    po = false;
    per = false;
    eva = false;
}

function kyPhysical() {
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'Backspace':
                cleanle();
                break;

            case '0':
            case '.':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                box.value += event.key;
                if (per) {
                    let pe = box.value.split("%*");
                    box2.value = pe[0] / 100 * pe[1];
                } else if (po) {
                    let sp = box.value.split("^");
                    box2.value = Math.pow(sp[0], sp[1]);
                } else if (eva) {
                    box2.value = eval(box.value);
                }
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                eva = true;
                box.value += event.key;
                break;

            case '=':
                total()
                break;

            default:
                box.value += '';
                break;
        }

    })
}

kyPhysical();