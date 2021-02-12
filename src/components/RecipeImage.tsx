import React from "react";
import classes from "./RecipeImage.module.scss";

interface IRecipeImage {
  src: string;
  alt: string;
  height?: string;
}

export const RecipeImage: React.FC<IRecipeImage> = (props: IRecipeImage) => {
  return (
    <div className={classes.Image} style={{ height: props.height }}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
