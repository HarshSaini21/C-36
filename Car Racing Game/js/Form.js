class Form{
  constructor(){

  }

  display(){
      var title = createElemant("h2");
      title.html("Car Racing Game");
      title.position(130, 0);


      var input = createInput("Name");
      input.position(130,160);


      var button = createButton("PLay");
      button.position(250, 200);

      button.mousePressed(function(){
        input.hide(); 
        button.hide();

        var name = input.value();
        playerCount++
        player.update(name);
        player.updateCount(playerCount);

        var greeting = createElemant("h3");
        greeting.html("HI" + name);
        greeting.position(130, 160);
        
      })
  }
}