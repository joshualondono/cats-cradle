//Challenge 0
function banner(value){
  if (isNaN(value)){
    const number = value
    console.log(value + ' Not a number' );
  } else {
    console.log(value + ' Challenge' );
  }
}

//Challenge 2
function firstFiveVowels(str){
  const vowels = 'aeiou';
  let count = 0;
  let i = 0;
  
  while (i < str.length){
    if (vowels.includes(str[i]) && count < 5){
      console.log(str[i]);
      count = count + 1;
    }
    i = i + 1;
  }
}

//Challenge 3
function printEveryThirdCharacter(str){
  let i = 2;
  
  while (i < str.length) {
    console.log(str[i]);
    i = i + 3;
  }
}

//Challenge 4
function firstFourCharacterAfter(str, start){
  let count = 0;
  let i = start;
  while ( i < str.length){
    if (count < 4) {
      console.log(str[i]); 
      count = count + 1;
    }
    
    i = i + 1;
  }
}

//Challenge 5
function indexofU(str){
  let i = 0;
  while (i < str.length){
    if (str[i] === 'u'){
      console.log(i)
    }
   i = i + 1;
  }
}

//Challenge 6
function firstIndexofU(str){
  let i = 0;
  while (i < str.length){
    if (str[i] === 'u'){
      console.log(i)
      return;
    }
   i = i + 1;
  }
}

function firstIndexofU2(str){
  let i = 0;
  let found = 
  
  while (i < str.length){
    if (str[i] === 'u' && found === false){
      console.log(i)
      found = true;
    } 
    if (found === false) {
      console.log(-1)
    }
   i = i + 1;
  }
}

banner(5)
firstFiveVowels('firstFiveVowels')
printEveryThirdCharacter('I am the alfalfa')
firstFourCharacterAfter('Oh hi, I didnt see you there.. Welcome', 21)
indexofU('Oh hi, I didnt see you there.. Welcome')
firstIndexofU('toooou')
firstIndexofU2('You picked the wrong house, bub')
