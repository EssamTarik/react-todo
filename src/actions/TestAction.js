import firebase from '../services/FirebaseService';

const TestAction = () => {
	return (dispatch) => {
		firebase.ref('test').once('value', (snapshot) => {
			dispatch({
				type: 'TestFetched',
				payload: snapshot.val()
			})
		});		
	}
}

export default TestAction;