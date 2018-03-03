import firebase from '../services/FirebaseService';

const addTodo = (data) => {
	return (dispatch) => {
		firebase.ref('todos').push(data);
	}
}

export default addTodo;