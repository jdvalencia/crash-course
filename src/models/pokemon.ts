export class Pokemon {
    id: number
    name: string
    order: number
    picture: string
    types: string[]
    abilities: string[]

    constructor(id:number, name:string, order: number, picture: string, types: string[], abilities: string []) {
        this.id = id;
        this.name = name;
        this.order = order;
        this.picture = picture;
        this.types = types;
        this.abilities = abilities;

    }

}