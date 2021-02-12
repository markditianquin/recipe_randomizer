import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./RecipeOTD.scss";
import { RecipeImage } from "../components/RecipeImage";
import { fetchRecipe } from "../store/actions/recipe";
import { IRootState } from "../store/StoreConfiguration";

interface IProps {}

export const RecipeOTD: React.FC<IProps> = () => {
  const recipe = useSelector((state: IRootState) =>
    state.recipes.recipe.find(
      (item) =>
        item.dateToCook &&
        item.dateToCook.getDate() === new Date().getDate() &&
        item.dateToCook.getMonth() === new Date().getMonth() &&
        item.dateToCook.getFullYear() === new Date().getFullYear()
    )
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  const call = () => {
    console.log(recipe!.dateToCook);
  };

  const getTodaysRecipe = (date: Date | undefined) => {
    const currentDate = new Date();

    if (
      date &&
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      return true;
    }

    return false;
  };

  return recipe ? (
    <div className="recipe-otd-container">
      <div>
        <div>
          title
        </div>
        <div className="recipe-otd-image">
          <RecipeImage
            src={recipe.imageURL as string}
            alt={recipe.description as string}
          />
        </div>
      </div>

      <div className="recipe-otd-prep-steps">Some Steps</div>
    </div>
  ) : (
    <div></div>
  );
};
