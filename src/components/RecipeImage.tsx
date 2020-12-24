import React from "react";

interface IRecipeImage {
  src: string;
  alt: string;
}

export const RecipeImage: React.FC<IRecipeImage> = (props: IRecipeImage) => {
  return <img src={props.src} alt={props.alt} />;
};
