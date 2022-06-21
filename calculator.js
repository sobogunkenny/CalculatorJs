

const numb1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter operator ( either +, -, * or / ): ");
const numb2 = parseFloat(prompt("Enter second number: "));

let result;

if (operator == "+") {
  result = numb1 + numb2;
} 
else if (operator == "-") {
  result = numb1 - numb2;
} 
else if (operator == "*") {
  result = numb1 * numb2;
} 
else if (operator == "/") {
  result = numb1 / numb2;
}
else {
    result = "invalid operator"
}

// display the result
alert(`${numb1} ${operator} ${numb2} = ${result}`);
