var calculator = {
  resultBox: document.querySelector(".result-box"),
  operation: document.querySelector(".operation"),
}


function operand(number) {
  calculator.resultBox.innerHTML += number;
}


var operateNumber = 0;
var operatorSyntext = "";
var operatorNumber2 = 0;

function operator(x) {
  var resultBoxTxt = document.querySelector(".result-box").innerText;
  operateNumber = Number(resultBoxTxt);
  operatorSyntext = x;
  calculator.operation.innerHTML += resultBoxTxt + x;
  // calculator.operation.innerHTML += x;
  calculator.resultBox.innerHTML = "";
}

function equal() {
  var resultBoxTxt = document.querySelector(".result-box").innerText;
  operatorNumber2 = Number(resultBoxTxt);
  statement()
}
function statement() {
  if (operatorSyntext == '+') {
    calculator.resultBox.innerHTML = operateNumber + operatorNumber2;
  } else if (operatorSyntext == '-') {
    calculator.resultBox.innerHTML = operateNumber - operatorNumber2;
  } else if (operatorSyntext == '*') {
    calculator.resultBox.innerHTML = operateNumber * operatorNumber2;
  } else if (operatorSyntext == '/') {
    calculator.resultBox.innerHTML = operateNumber / operatorNumber2;
  } else if (operatorSyntext == '%') {
    calculator.resultBox.innerHTML = operateNumber % operatorNumber2;
  }

}

function clearAll() {
  calculator.resultBox.innerHTML = "";
  calculator.operation.innerHTML = "";
}

console.log(array)