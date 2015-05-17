/// <reference path="references.ts"/>

class Engine{
	static config: EngineConfig;
	private _scene: Scene;

	constructor(newConfig: EngineConfig){
		// set up event listeners
		Engine.config = newConfig;
		this._scene = new GameScene();
		window.requestAnimationFrame(this.loop);
	}

	loop = () => {
		window.requestAnimationFrame(this.loop);
		this._scene.render();
	}

	get scene(): Scene{
		return this._scene;
	}
	set scene(newScene: Scene){
		this._scene = newScene;
	}
}

interface EngineConfig{
	canvas: HTMLCanvasElement;
	renderWidth: number;
	renderHeight: number;
}