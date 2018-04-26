/**
 * plugin imports
 */
import { createStore } from "redux";
/**
 * project imports
 */
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);
export default store;
