import { Incredient } from '../shared/incredient.module';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public incredients: Incredient[]

  constructor(name: string, desc: string, imagePath: string,incredients:Incredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.incredients = incredients;
  }
}
