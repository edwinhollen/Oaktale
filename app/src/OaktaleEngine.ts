/// <reference path="references.ts"/>
class Engine{
	private _config: EngineConfig;
	private _scene: Scene;

	constructor(newConfig: EngineConfig){
		// set up event listeners
		this._config = newConfig;
		this._scene = new GameScene(this._config);
		window.requestAnimationFrame(this.loop);
	}

	loop = () => {
		window.requestAnimationFrame(this.loop);
		this._scene.act(this._config);
	}

	get scene(): Scene{
		return this._scene;
	}
	set scene(newScene: Scene){
		this._scene = newScene;
	}
	

	get config(): EngineConfig{
		return this._config;
	}


}

interface EngineConfig{
	canvas: HTMLCanvasElement;
	renderWidth: number;
	renderHeight: number;
}