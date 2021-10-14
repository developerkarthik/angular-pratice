import { Ingredients } from "../shared/ingredients.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public Ingredients: Ingredients[];
    constructor(name: string, desc: string, imagePath: string, Ingredients: Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.Ingredients = Ingredients;
    }
}