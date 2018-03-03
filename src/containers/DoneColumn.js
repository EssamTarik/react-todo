import React, {Component} from 'react';
import TodoCard from '../components/TodoCard';

class TodoColumn extends Component{
	render(){
		return (
			<div className="uk-width-1-2">
				<h3>Done</h3>
				<hr />
    			{this.props.items.map((item) => (
    				<TodoCard
    					markAsUndone={this.props.markAsUndone}
    					complete={true}
    					key={item.key}
    					removeTodo={this.props.removeTodo}
    					card={item} />
    				))}
			</div>
		);
	}
}

export default TodoColumn;