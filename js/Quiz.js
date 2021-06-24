class Quiz{
  constructor(){}

  getState(){
      var gameStateRef=database.ref("gameState")
      gameStateRef.on("value",function(data){
      gameState=data.val();
      })
  }
  update(state){
      database.ref('/').update({
          gameState:state
      });
  }
  async start(){
      if(gameState === 0){
         contestant = new Contestant();
        var contestantCountRef = await database.ref('contesCount').once("value");
        if(contestantCountRef.exists()){
            contestentCount = contestantCountRef.val();
            contestent.getCount();
        }
        question = new Question();
        question.display();
      }
    }

play(){
    Question.hide();
    background("yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340,50);
    text("---------------------------",320,65);
    contestent.getPlayerInfo();
    if (allContestents !== undefined){
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("Note: COntestent who answer correct are hight;ighted in green color",130,230);

        for(var plr in allContestant){
            var coreectAns = "2";
            if(coreectAns === allContestents[plr].answer){
                fill("Green")
            }else{
                fill("red");
            }

            display_Answers+=30;
            textSize(20);
            text(allContestents[plr].name +":"+allContestents[plr].answer,250,display_Answers)
          }
        }
    }
}