import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { RecipReducer } from "./reducers/recipe";

const rootReducer = combineReducers({
  recipes: RecipReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type IRootState = ReturnType<typeof store.getState>;
