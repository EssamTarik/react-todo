import {combineReducers} from 'redux';
import TestReducer from './TestReducer';
import TodosReducer from './TodosReducer';

export default combineReducers({
	Test: TestReducer,
	Todos: TodosReducer
})