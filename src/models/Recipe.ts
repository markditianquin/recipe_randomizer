export interface Recipe {
  id: number;
  name: string;
  imageURL?: string;
  description?: string;
  preparationSteps: Array<string>;
  ingredients: Array<string>;
  dateToCook?: Date;
}
