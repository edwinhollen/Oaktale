/// <reference path="references.ts"/>
interface System{
    render(entities: Array<Entity>): void;
    acceptedComponents: Array<Object>;
}