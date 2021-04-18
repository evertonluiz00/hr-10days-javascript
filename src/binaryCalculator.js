var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btnClr = document.getElementById('btnClr')
var btnEql = document.getElementById('btnEql')
var btnSum = document.getElementById('btnSum')
var btnSub = document.getElementById('btnSub')
var btnMul = document.getElementById('btnMul')
var btnDiv = document.getElementById('btnDiv')

btn0.addEventListener('click', clicked);
btn1.addEventListener('click', clicked);
btnClr.addEventListener('click', clicked);
btnEql.addEventListener('click', clicked);
btnSum.addEventListener('click', clicked);
btnSub.addEventListener('click', clicked);
btnMul.addEventListener('click', clicked);
btnDiv.addEventListener('click', clicked);

function clicked(e) {
    switch (e.target.textContent) {
        case "C":
            res.innerHTML = "";
            break;
        case "=":
            res.innerHTML = calc(res.innerHTML);
            break;
        default:
            res.innerHTML += e.target.textContent;
    }

}

function calc(res) {
    let result = '';

    const reOperands = /\d+/g;
    let [ operand1, operand2 ] = (res.match(reOperands));

    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    
    const reOperator = /\W/;   
    let operator = (res.match(reOperator)).toString();    

    switch (operator) {
        case '+':
            result = (operand1 + operand2).toString(2);
            break;
        case '-':
            result = (operand1 - operand2).toString(2);
            break;
        case '*':
            result = (operand1 * operand2).toString(2);
            break;
        case '/':
            result =  (operand1 / operand2).toString(2);
            break;
        default:
            result = "Undefined";
    }

    return result;
}

