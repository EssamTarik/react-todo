import firebase from '../services/FirebaseService';

const markAsDone = (key) => {
	return (dispatch) => {
		firebase.ref(`todos/${key}`).update({complete: true});
	}
}

export default markAsDone;