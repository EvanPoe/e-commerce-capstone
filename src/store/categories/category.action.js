import { CATEGORIES_ACTION_TYPE } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

//create action with type the reducer is expecting
export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);