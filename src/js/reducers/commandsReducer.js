/**
 * plugin imports
 */
import {filter} from "lodash";
/**
 * project imports
 */
import {FILTER_COMMANDS} from "../config";
import allCommands from "../../data/commands";

/**
 * initial commands state
 * @type {{data: Array}}
 */
const initialState = {
    data: []
};
/**
 *
 * @param state
 * @param action
 * @returns {{data: Array}}
 */
export default function filterCommandsAction(state= initialState, action) {
    switch (action.type){
        case FILTER_COMMANDS:
            return {
                ...state,
                data: filterCommands(action.payload.dataSet, action.payload.language)
            };
        default:
            return state;
    }
};

const filterCommands = (dataSetId, language) => {
  return filter(
      allCommands,
      language ? {dataSetId, language} : {dataSetId}
  )
};