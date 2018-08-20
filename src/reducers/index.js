import { combineReducers } from 'redux';
import list from './listReducer';

const reducer = combineReducers({
	list
});

export default reducer;