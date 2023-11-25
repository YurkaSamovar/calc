const btns = document.getElementsByClassName("btn");
let selectVal = val1;
let selectBtn;

for (let btn of btns) {
    btn.onclick = () => {
        selectBtn = btn.value;
        executer();
    }
}

function executer() {
    switch (selectBtn) {
        case "+": case "-": case "/": case "*":
            if(val1.value != "") {
                operator.textContent = selectBtn;
                selectVal = val2;
            }
            break;
        case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "0":
            selectVal.value += selectBtn;
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
    switch (operator.textContent) {
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
    val1.value = "";
    val2.value = "";
    resultat.value = "";
    operator.textContent = "";
}


