module OaktaleEngine{
	class GameContainer{
		private _canvas: HTMLCanvasElement;
		private _ctx: CanvasRenderingContext2D;
		constructor(canvasElement: HTMLCanvasElement){
			this._canvas = canvasElement;
			this._ctx = <CanvasRenderingContext2D>canvasElement.getContext('2d');
		}

		

		get canvas(): HTMLCanvasElement{
			return this._canvas;
		}
		get ctx(): CanvasRenderingContext2D{
			return this._ctx;
		}
	}
}