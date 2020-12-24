import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Recipe } from "../../models/Recipe";
import { AppThunk } from "../AppThunk";
import { IRootState } from "../StoreConfiguration";
import { Actions } from "./actionTypes";

export const getAllRecipeStart = (): Actions => {
  return {
    type: "GET_ALL_RECIPE_START",
  };
};

export const getAllRecipeSuccess = (recipe: Recipe[]): Actions => {
  return {
    type: "GET_ALL_RECIPE_SUCCESS",
    recipe: recipe,
  };
};

export const fetchRecipe = () => {
  return async (dispatch: (arg0: Actions) => void) => {
    dispatch(getAllRecipeStart());

    // TODO: backend call
    const recipe: Recipe = {
      id: 1,
      ingredients: ["lorem", "ipsum"],
      name: "Lorem",
      preparationSteps: ["lorem", "ipsum"],
      imageURL:
        "https://th.bing.com/th/id/OIP.pGq7-4IIN3dc-KPp_OtV9QHaFj?w=208&h=180&c=7&o=5&dpr=2&pid=1.7",
      dateToCook: new Date(),
      description: "Lorem Ipsum",
    };
    dispatch(getAllRecipeSuccess([recipe]));
  };
};

//something for type checking
export const fetchRecipe1 = (): AppThunk => async (
  dispatch: (arg0: Actions) => void
) => {
  const asyncResp = await exampleAPI();
  dispatch({ type: "GET_ALL_RECIPE_START" });
};

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
