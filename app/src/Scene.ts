/// <reference path="references.ts"/>
class Scene{
	constructor(config: EngineConfig){

	}
	public act(config: EngineConfig): void{
		console.log('acting at', window.performance.now());
	}
}
