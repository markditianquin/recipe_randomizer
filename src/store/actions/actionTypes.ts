import { Recipe } from "../../models/Recipe";

export const GET_ALL_RECIPE_SUCCESS = "GET_ALL_RECIPE_SUCCESS";
export const GET_ALL_RECIPE_START = "GET_ALL_RECIPE_START";
export const GET_ALL_RECIPE_FAIL = "GET_ALL_RECIPE_FAIL";

export type Actions =
  | { type: typeof GET_ALL_RECIPE_START }
  | { type: typeof GET_ALL_RECIPE_SUCCESS; recipe: Recipe[] }
  | { type: typeof GET_ALL_RECIPE_FAIL; error: string };
