class Player {
  constructor()
  {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
getCount(){
var playercountref=database.ref('playerCount')  
playercountref.on("value",data=>{
  playercount=data.val()
                                                                               

})
}

  updateCount(){
    database.ref("/").update({
      playerCount:count
      
    })
    
  }
 }

