console.log("js_hw_t6");

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите любое число');
  const inputNumber = Number(input);
  if (!Number.isNaN(inputNumber)) {
    if (input !== null && input !== '') {
      numbers.push(inputNumber)
      console.log(numbers);
    }
  } else {
    alert('Было введено не число, попробуйте еще раз')
  }
}

for (const el of numbers) {
  total += +(el);
}

console.log(`Общая сумма чисел равно ${total}`);