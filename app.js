let guess = ["G","Y","P","P"]
let answer = ["R", "O","Y", "Y"]

const score = (answer, guess) => {

  let result = []
  let bCount = 0
  let wCount = 0
  let originalAnswer = answer

  //black pegs
  for(let i = 0; i < guess.length; i++){  
    if(guess[i] === answer[i]){
      bCount++     
    }
  }
  
  //white pegs
  for(let i = 0; i < guess.length; i++){
    if(answer.indexOf(guess[i]) != -1 && (answer[i]!= guess[i])){
      wCount++
      answer[answer.indexOf(guess[i])] = "0"
    }
  }
  
  
  while(bCount > 0){
    result.push("B")
    bCount--
  }
  
  while(wCount > 0){
    result.push("W")
    wCount--
    
  }

  return result
  
}

console.log(score(answer, guess))
