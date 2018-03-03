const TodosReducer = (state={done: [], todo: []}, action) => {
	switch(action.type){
		case "TodosFetched":
			return action.payload;
		default:
			return state;
	}
}

export default TodosReducer;