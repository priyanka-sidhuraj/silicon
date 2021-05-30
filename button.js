class Button{
	constructor(){
		this.reset = createButton("Reset")
	}

	display(){
		this.reset.position(1265, 0);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.reset.mousePressed(() => {
           gameState = "play"
        });
	}
}