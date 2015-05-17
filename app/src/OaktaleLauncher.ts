/// <reference path="references.ts"/>

class OaktaleLauncher{
	constructor(){
		var engine = new Engine({
			canvas: <HTMLCanvasElement> document.querySelector('canvas.gameCanvas'),
			renderWidth: 400,
			renderHeight: 300
		});
	}
}