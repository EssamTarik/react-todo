import React, {Component} from 'react';
import TodoCard from '../components/TodoCard';

class TodoColumn extends Component{
	render(){
		return (
			<div className="uk-width-1-2">
				<h3>Done</h3>
				<hr />
    			{this.props.items.map((item) => <TodoCard complete={true} key={item.key} card={{title: item.title, description: item.description}} />)}
			</div>
		);
	}
}

export default TodoColumn;