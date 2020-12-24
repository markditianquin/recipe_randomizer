import { Recipe } from "../../models/Recipe";
import * as actionTypes from "../actions/actionTypes";

interface IRecipe {
  recipe: Recipe[];
  error: string | null;
}
const initialState: IRecipe = {
  recipe: [],
  error: null,
};

export const RecipReducer = (
  state = initialState,
  action: actionTypes.Actions
) => {
  switch (action.type) {
    case actionTypes.GET_ALL_RECIPE_START:
      return { ...state };
    case actionTypes.GET_ALL_RECIPE_SUCCESS:
      return { ...state, recipe: action.recipe, error: null };
    case actionTypes.GET_ALL_RECIPE_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
