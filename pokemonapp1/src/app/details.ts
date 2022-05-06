export class Details{
    id:number;
    name:string;
    base_experience:number;
    height:number;
    is_default:boolean;
    order:number;
    weight:number;
    abilities:object;
    forms:object;
    game_indices:object;
    held_items:object;
    location_area_encounters:string;
    moves:object;
    past_types:object;
    sprites:string;
    species:string;
    stats:object;
    types:object;

    constructor(values:object={}){
        Object.assign(this,values);
    }
}