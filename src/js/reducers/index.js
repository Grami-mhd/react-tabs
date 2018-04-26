/**
 * plugin imports
 */
import {combineReducers} from "redux"
/**
 * project imports
 */
import dataSets from "./dataSetsReducer";
import commands from "./commandsReducer";

export default combineReducers({dataSets, commands}) ;