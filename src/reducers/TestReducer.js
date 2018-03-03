const TestReducer = (state="Hello Reducer", action) => {
	switch(action.type){
		case "TestFetched":
			return action.payload;
		default:
			return state;
	}
}

export default TestReducer;