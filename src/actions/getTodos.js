import firebase from '../services/FirebaseService';

const getTodos = () => {
	return (dispatch) => {
		firebase.ref('/todos').on('value', (snapshot) => {
			let done = [];
			let todo = [];
			if(snapshot.val()){
				snapshot.forEach((taskSnapshot) => {
					let task = Object.assign({}, taskSnapshot.val(), {key: taskSnapshot.key});
					if(task.complete)
						done.push(task)
					else
						todo.push(task)
				})
			}
			dispatch({
				type: 'TodosFetched',
				payload: {done, todo}
			})
		})
	}
}

export default getTodos;