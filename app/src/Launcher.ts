/// <reference path="references.ts"/>

class Launcher{
	constructor(){
		var engine = new Engine({
			canvas: <HTMLCanvasElement> document.querySelector('canvas.gameCanvas'),
			renderWidth: 400,
			renderHeight: 300
		});
        engine.scene = new GameScene();
	}
}

// start
new Launcher();