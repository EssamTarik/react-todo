import React, {Component} from 'react';
import {Card, CardTitle, Button} from 'react-md';

class TodoCard extends Component{
	render(){
		return (
			<Card style={{backgroundColor: this.props.complete?'#E0F2F1':'#EDE7F6'}} className="md-block-centered">
			    <CardTitle title={this.props.card.title} subtitle={this.props.card.description} />
			    <div style={{textAlign: 'right', margin: 0, padding: 0}}>
			    	<Button style={{color: 'red'}} swapTheming tooltipLabel="Delete" icon>clear</Button>
			    	<Button swapTheming tooltipLabel="Edit" icon>create</Button>
			    	<Button swapTheming style={{color: 'green'}} tooltipLabel="Mark as done" icon>done</Button>
			    </div>
			</Card>
		);
	}
}

export default TodoCard;