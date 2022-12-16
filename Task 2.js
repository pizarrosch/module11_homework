function getIsPrimeOrNot (num) {

  if ((num === 2 || num === 3) || (num % 2 !== 0 && num % 3 !== 0) && num !== 1 && num <= 1000) {
    console.log(`Введённое Вами число "${num}" является простым`);
  } else if ((num !== 0 && num !== 1) && (num % 2 === 0 || num % 3 === 0) && num <= 1000) {
    console.log(`Введённое Вами число "${num}" является составным`);
  } else if (num === 0 || num === 1) {
    console.log(`Введённое Вами число "${num}" не является ни простым, ни составным`);
  } else if (num > 1000) {
    console.log("Введённые Вами данные неверны, введите число <= 1000");
  }
}

getIsPrimeOrNot(1001);