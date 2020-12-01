var readInput = require("readline-sync");
var chalk = require("chalk");


//Quiz data
var qData =[{
  question:"\nWhat music do i usually listen too?\n",
  options: ["Bollywood","EDM english","Harayanvi"],
  answer:"Harayanvi"
},
{
  question:"\nWhat is my nickname?\n",
  options: ["Chotu","Gullu","Avi"],
  answer:"Gullu"
},
{
  question:"\nDo I have any pets?\n",
  options: ["Yes","No"],
  answer:"No"
},
{
  question:"\nWhere do i study?\n",
  options: ["HMRITM","BPIT","GGSIPU"],
  answer:"HMRITM"
},
{
  question:"\nWhat movie series I like?\n",
  options: ["Harry Potter","Fantastic Beasts","Despicable me"],
  answer:"Harry Potter"
},
{
    question: "\nWhat is my middle name?",
    options: ["Pratap","Kumar","None"],
    answer:"None"
}]



//Welcome Screen.
var userName = readInput.question("What is your name?\n");
console.log("\nWelcome "+ userName +" :)\n");
console.log("\n---Game: How much do you know me?---");
console.log("MCQ based simple quiz about @YashSharma\n");



//Scores ka funda
var score=0;
var highScore=[{
  name:"Yash",
  hScore:30
},
{
  name:"Gulshan",
  hScore:30
}]



//Quiz function
function quizMe(question, options, answer){
  var userAnswer = readInput.keyInSelect(options,question);
  if (options[userAnswer]===answer){
    console.log(chalk.bold("Correct Answer"));
    score=score+10;
  }
  else{
    console.log(chalk.bold("Wrong Answer"));
  }
  console.log("Your Score is "+score+"!");
}



//main for loop which handles everything.
for(var i=0; i<qData.length; i++){
  var next = readInput.keyInYN("\nContinue Playing?");
  if(next){
    console.log("\n---------------------------")
    console.log("\nQuestion No."+ (i+1));
    quizMe(qData[i].question,qData[i].options,qData[i].answer);
    console.log("\n---------------------------");
  }
  else {
    if(highScore[0].hScore<=score){
      console.log("\nYou banged it man! \nNew high score is "+score+" by "+userName+". \nSend me ss of your score now!");
    }
    else{
      console.log("\nNice try.\nYour total score is "+score+".\nHigh Score of the game is "+highScore[0].hScore+" by "+highScore[0].name)
    }
    console.log("\n-----------Thanks for playing------------\n ");
    break;
  }
}