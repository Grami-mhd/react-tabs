import {FILTER_COMMANDS} from "../config";

/**
 * filter the store's commands with the new inputs
 * @param filters
 * @returns {{type, payload: *}}
 */
export const filterCommands = (filters) => ({
    type: FILTER_COMMANDS,
    payload: filters
});