import { combineReducers } from 'redux';
import { reducer as userReducer} from '../pages/store';
const reducer = combineReducers({
    common: userReducer
});
export default reducer;