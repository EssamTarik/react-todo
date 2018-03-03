import React, {Component} from 'react';
import {Card, CardTitle, Button} from 'react-md';

class TodoCard extends Component{
	render(){
		return (
			<Card style={{marginBottom: 15, marginLeft: 10, marginRight: 10, backgroundColor: this.props.complete?'#E0F2F1':'#EDE7F6'}} className="md-block-centered">
			    <CardTitle title={this.props.card.title} subtitle={this.props.card.description} />
			    <div style={{textAlign: 'right', margin: 0, padding: 0}}>
			    	<Button onClick={() => {this.props.removeTodo(this.props.card.key)}} style={{color: 'red'}} swapTheming tooltipLabel="Delete" icon>clear</Button>
			    	<Button onClick={() => this.props.editTodo(this.props.card)} swapTheming tooltipLabel="Edit" icon>create</Button>
			    	<Button
			    	tooltipPosition={this.props.complete?'left':'bottom'}
			    	onClick={() => {
			    		if(this.props.complete)
				    		this.props.markAsUndone(this.props.card.key);
				    	else
				    		this.props.markAsDone(this.props.card.key);
			    	}} swapTheming style={{color: this.props.complete?'orange':'green'}} tooltipLabel={`Mark as ${this.props.complete?'undone':'done'}`} icon>{this.props.complete?'undo':'done'}</Button>
			    </div>
			</Card>
		);
	}
}

export default TodoCard;