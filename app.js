let guess = ["G","Y","P","P"];
let answer = ["R", "O","Y", "Y"];

const score = (answer, guess) => {

  let result = [];
  let originalAnswer = answer;

  //black pegs
  for(let i = 0; i < guess.length; i++){  
    if(guess[i] === answer[i]){
      result.push("B");   
    }
  }
  
  //white pegs
  for(let i = 0; i < guess.length; i++){
    if(answer.indexOf(guess[i]) != -1 && (answer[i]!= guess[i])){
      result.push("W");
      answer[answer.indexOf(guess[i])] = "0";
    }
  }

  return result;
  
}

console.log(score(answer, guess));
