import firebase from '../services/FirebaseService';

const editTodo = (key, data) => {
	console.log(key);
	return (dispatch) => {
		data = Object.assign({}, data);
		if(data.key)
			delete data.key;
		firebase.ref(`todos/${key}`).update(data);
	}
}

export default editTodo;