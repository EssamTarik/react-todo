import firebase from '../services/FirebaseService';

const markAsUndone = (key) => {
	return (dispatch) => {
		firebase.ref(`todos/${key}`).update({complete: false});
	}
}

export default markAsUndone;