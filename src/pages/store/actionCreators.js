import {
    GET_DATA_ACTIONS,
    SET_DATA_ACTIONS
} from './actionTypes';

export const getDataActions = () => {
    type: GET_DATA_ACTIONS
};

export const setDataActions = (data) => {
    type: SET_DATA_ACTIONS,
    data
};