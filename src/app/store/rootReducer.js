import { combineReducers } from "redux";
import toDoWithCategory from "./toDoWithCategory/reducer";

export default function rootReducer() {
  const reducerMap = {
    toDoWithCategories: toDoWithCategory,
  };

  return combineReducers(reducerMap);
}
