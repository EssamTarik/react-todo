import React, {Component} from 'react';
import TodoCard from '../components/TodoCard';

class TodoColumn extends Component{
	render(){
		return (
			<div className="uk-width-1-2">
				<h3>To do</h3>
				<hr />
    			<TodoCard card={{title: 'title', description: 'description'}} complete={true} />
			</div>
		);
	}
}

export default TodoColumn;