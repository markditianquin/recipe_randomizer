import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "./StoreConfiguration";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;
