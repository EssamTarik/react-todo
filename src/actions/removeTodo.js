import firebase from '../services/FirebaseService';

const removeTodo = (key) => {
	return (dispatch) => {
		firebase.ref(`todos/${key}`).remove();
	}
}

export default removeTodo;