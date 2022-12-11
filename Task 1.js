const arr2 = [22, 38, 659, 0, null, 95, false, 46, undefined, 193, 321, 908];

let num = 0;
let evenNum = 0;
let oddNum = 0;
let zero = 0;
let notANumber = 0;

function countItems() {
  for(let item of arr2){
    let number = typeof(item) === 'number';

    if(number) {
      num++;
    }
    if(item % 2 === 0 && item !== 0 && number) {
      evenNum++;
    }
    if(item % 2 !== 0 && number) {
      oddNum++;
    }
    if(item === 0) {
      zero++;
    }
    if(typeof(item) !== 'number') {
      notANumber++;
    }
  }

  console.log(`В данном массиве ${num} чисел, ${evenNum} чётных чисел, ${oddNum} нечётных чисел, ${zero === 1 ? `${zero} нуль` : `${zero} нулей`}, ${notANumber} элементов не являются числами`);
}

countItems();