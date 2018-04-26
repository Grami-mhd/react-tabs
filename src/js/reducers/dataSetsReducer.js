import dataSets from "../../data/dataSets.json";

/**
 * initial data sets state
 * @type {{data}}
 */
const initialState = {
    data: dataSets
};

export default function getDataSets(state= initialState) {
    return state
};