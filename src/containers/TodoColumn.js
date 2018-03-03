import React, {Component} from 'react';
import TodoCard from '../components/TodoCard';

class TodoColumn extends Component{
	render(){
		return (
			<div className="uk-width-1-2">
				<h3>To do</h3>
				<hr />
    			{this.props.items.map((item) => <TodoCard key={item.key} markAsDone={this.props.markAsDone} card={item} />)}
			</div>
		);
	}
}

export default TodoColumn;