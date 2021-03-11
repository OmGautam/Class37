class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement('h3');
        
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Car Game");
        title.position(500,10);

        this.input.position(500,150);

        this.button.position(500,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(500,150);
        })
    }
}