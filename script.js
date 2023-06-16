const $ = document;
const box = $.getElementById('inp');
const box2 = $.getElementById('inp2');
let po, per, eva = false;

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
                let len = box.value.length;
                box.value = box.value.substr(0, len - 1);
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
            case '+':
            case '-':
            case '*':
            case '/':
                box.value += event.key;
                box2.value = eval(box.value);
                break;

            case '=':
                box.value = box2.value;
                box2.value = "";
                po = false;
                per = false;
                eva = false;
                break;

            default:
                box.value += '';
                break;
        }

    })
}

kyPhysical();