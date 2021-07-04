// Desafio 1
function compareTrue(param1, param2) {
  return (param1 === true && param2 === true);
}

// Desafio 2
function calcArea(base, height) {

  return (base * height) / 2;
}
console.log(calcArea(5,2));

// Desafio 3 // ajuda retirada no site w3schools
function splitSentence(string) {
  let array = string.split(" ")
  return array;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6 // ajuda retirada no plantão com Baeta
function highestCount(arrayNumbers) {
  let maior = arrayNumbers[0];
  let contador = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maior) {
      maior = arrayNumbers[index];
    }
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === maior) {
      contador += 1;
    }
  }
  return contador;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

// Desafio 7 // ajuda retirada no slack e plantão Baeta
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(mouse - cat1);
  let posicaoCat2 = Math.abs(mouse - cat2);
  if (posicaoCat1 < posicaoCat2) {
    return 'cat1';
  } else if (posicaoCat2 < posicaoCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8 // ajuda com slack
function fizzBuzz(arrayNumber) {
  let newArray = [];
for (let index = 0; index < arrayNumber.length; index += 1) {
  if (arrayNumber[index] %3 === 0 && arrayNumber[index] %5 === 0) {
    newArray.push('fizzBuzz');
  }
    else if (arrayNumber[index] %3 === 0) {
      newArray.push('fizz');
    }
    else if (arrayNumber[index] %5 === 0) {
      newArray.push('buzz');
    }
    else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 4]));

// Desafio 9
function encode() {
  let string = [];
  for(i = 0; i < string.length; i +=1){
    if (string[i] === 'a') {
      'a' = 1;
    }
    else if (string[i] === 'e') {
      'e' = 2;
    }
    else if (string[i] === 'i') {
      'i' = 3;
    }
    else if (string[i] === 'o') {
      'o' = 4;
    }
    else if (string[i] === 'u') {
      'u' = 5;
    }
  }
}
console.log(encode("hi there!"));

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};