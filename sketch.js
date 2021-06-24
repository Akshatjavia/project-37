var canvas,backgroundImage;
var gameState=0;
var contestentCount;
var allContestants;
var contestant;
var answer;
var database;

var question,contestent,quiz;

function setup(){
  canvas = createCanvas(900,400);

  database=firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");

  if(contestentCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    Quiz.play();
  } 
}
