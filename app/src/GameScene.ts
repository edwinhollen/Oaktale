/// <reference path="references.ts"/>
class GameScene extends Scene{
    private _ces: ComponentEntitySystem;
	constructor(){
		super();
        this._ces = new ComponentEntitySystem();
	}
	render(): void{
		
	}
}