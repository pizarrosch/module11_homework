function func1(num1) {
  return function func2(num2) {
    console.log(`Сумма чисел равна ${num1 + num2}`)
  }
}

const resultFunc = func1(15);
resultFunc(32);