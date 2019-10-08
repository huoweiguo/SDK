import {
    GET_DATA_ACTIONS,
    SET_DATA_ACTIONS
} from './actionTypes';

const defaultValue = {
    token: '',
    userId: '',
    merchantId: '',
    userName: ''
};

const reducer = (state = defaultValue, action)  => {
    switch (action.type) {
        case GET_DATA_ACTIONS : 
            var newState = JSON.parse(JSON.stringify(state));
            return newState;
        case SET_DATA_ACTIONS :
            var newState = JSON.parse(JSON.stringify(state));
            action.data.token && (newState.token = action.data.token);
            action.data.userId && (newState.userId = action.data.userId);
            action.data.userName && (newState.userName = action.data.userName);
            action.data.merchantId && (newState.merchantId = action.data.merchantId);
            return newState;
    }
    return state;
};

export default reducer;