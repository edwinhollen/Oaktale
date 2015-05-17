/// <reference path="references.ts"/>

class ComponentEntitySystem {
    private _entities: Array<Entity>;
    private _systems: Array<System>;
    constructor() {
        this._entities = [];
        this._systems = [];
    }
    render() {
        this._systems.forEach(function(system){
            
        });
    }
    addEntity(newEntity:Entity): void{
        this._entities.push(newEntity);
    }
    addSystem(newSystem:System): void{
        this._systems.push(newSystem);
    }
}