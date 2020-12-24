import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RecipeImage } from "../components/RecipeImage";
import { fetchRecipe } from "../store/actions/recipe";
import { IRootState } from "../store/StoreConfiguration";

interface IProps {}

export const RecipeOTD: React.FC<IProps> = () => {
  const recipe = useSelector((state: IRootState) => state.recipes.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  const call = () => {
    console.log(recipe);
  };

  return (
    <div>
      <button onClick={call}>click</button>
      {/* <RecipeImage src={} alt={}></RecipeImage> */}
    </div>
  );
};
