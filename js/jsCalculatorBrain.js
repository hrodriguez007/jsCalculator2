let trailingResult = 0;
let operationOptions = ['divide', 'multiply','subtract', 'add'];
let workingOperation = "";

  function updateDisplay(input) {
      let display = document.getElementById("display");
      let secondaryDisplay = document.getElementById("secondaryDisplay");
      

      if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === 'decimal') {
          display.innerHTML = "0.";
        } else if (input  === "negative-value") {
          if (display.innerHTML.indexOf("-1") === -1) {//if -1 is there
          display.innerHTML = "-" + display.innerHTML
        } else if (display.innerHTML.indexOf("-1" > -1)) {
          display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);//will remove negative html from there
        }
        } else {
          display.innerHTML = input;  
        }
      } else if (operationOptions.indexOf(input) >= 0) {
        // console.log("Dealing with a operation");//when there is an operation

        if (trailingResult === display.innerHTML)  {
          //operand button chosen twice exception
          workingOperation = input;
        } else if (workingOperation === "") {//when no operation is selcted
          //working without initial operand
          workingOperation = input;
          trailingResult = display.innerHTML;
          secondaryDisplay.innerHTML = trailingResult;
          display.innerHTML = 0;
        } else {
          //working with set operand
          // console.log(display.innerHTML, "Dealing with set operand")
          trailingResult = calculate(trailingResult, display.innerHTML, workingOperation)
          secondaryDisplay.innerHTML = trailingResult;
          display.innerHTML = 0;
          workingOperation = input;
        }
      } else if (input === "equals")  {
        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = "";
        secondaryDisplay.innerHTML = trailingResult;
      } else if (input === "decimal")  {
        // console.log('decimal clicked');
        if(display.innerHTML.indexOf(".") === -1 ) { //is not present decimal then add it
          display.innerHTML += ".";
        }
        // console.log("decimal skipped beacuse already present");
      } else if (input === "negative-value") {
        console.log("negative-value selected");
        if (display.innerHTML.indexOf("-1") === -1) {//if -1 is there
          display.innerHTML = "-" + display.innerHTML
        } else if (display.innerHTML.indexOf("-1" > -1)) {
          display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);//will remove negative html from there
        }
        
      } else {
        display.innerHTML += input;
      }
      //5 - 2 = / 2 =
      console.log(trailingResult, "<= trailingResult", display.innerHTML, " <= display.innerHTML", workingOperation, " <= workingOperation");
  }

  function clearDisplay() {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");
    trailingResult = 0;
    display.innerHTML = 0;
    secondaryDisplay.innerHTML = trailingResult;
  }

  function calculate(firstNumber, secondNumber, operation) {
    let result;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch(operation) {
      case "add":
        // console.log("add calculated")
        result = firstNumber + secondNumber;
        break;
      case "subtract":
        // console.log("subtract calculated")
        result = firstNumber - secondNumber;
        break;
      case "multiply":
        // console.log("multiply calculated")
        result = firstNumber * secondNumber;
        break;
      case "divide":
        // console.log("divide calculated")
        result = firstNumber / secondNumber;
        break;
      default:
        console.log("Calculate switch statement missed something");
  
    }
    return result.toString();
  }

