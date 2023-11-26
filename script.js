const btns = document.getElementsByClassName("btn");
let selectVal = val1;
let selectBtn, selectOper;

let mapOper = new Map();
mapOper.set("+", add)
       .set("-", sous)
       .set("/", div)
       .set("*", mult);

for (let btn of btns) {
    btn.onclick = () => {
        selectBtn = btn;
        executer();
    }
}

function executer() {
    switch (selectBtn.textContent) {
        case "+": case "-": case "/": case "*":
            if(val1.value != "") {
                if(selectOper != null)
                    mapOper.get(selectOper.textContent).removeAttribute("select");
                selectOper = selectBtn;
                mapOper.get(selectOper.textContent).setAttribute("select", "");
                selectVal = val2;
            }
            break;
        case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
            if(val1.value == "0" || val2.value == "0"){
                selectVal.value = selectBtn.textContent;
                break;
            }
            selectVal.value += selectBtn.textContent;
            break;
        case "0":
            if(val1.value == "0" || val2.value == "0")
                break;
            selectVal.value += selectBtn.textContent;
            break;
        case "=":
            if(val1.value != "" && val2.value != "") {
                resultat.value = getResultat();
            }
            break;
        case "C":
            restore();
    }
}

function getResultat() {
    switch (selectOper.textContent) {
        case "+":
            return Number(val1.value) + Number(val2.value);
        case "-":
            return Number(val1.value) - Number(val2.value);
        case "/":
            if(val2.value == "0")
                return "💩";
            return Number(val1.value) / Number(val2.value);
        case "*":
            return Number(val1.value) * Number(val2.value);
    }
}

function restore() {
    selectVal = val1;
    selectBtn = null;
    mapOper.get(selectOper.textContent).removeAttribute("select");
    selectOper = null;
    val1.value = "";
    val2.value = "";
    resultat.value = "";
}

function getOperElement() {
    switch (selectOper.value) {
        case "+":

        case "-":

        case "/":

        case "*":

    }
}


