class Contestant {
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }
  
    getCount(){
      var contestentCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
        var contestantIndex = "contestants/contestent" + this.index;
        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
        });
    }
    
    static getPlayerInfo(){
        var contestantCountRef = database.ref('contestants');
        contestaneInfoRef.on("value",(data)=>{
            allContestants = data.val();
        })
    }
  }