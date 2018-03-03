import React, {Component} from 'react';
import {Card, CardTitle} from 'react-md';

class TodoCard extends Component{
	render(){
		return (
			<Card style={{backgroundColor: this.props.complete?'#E0F2F1':'#EDE7F6'}} className="md-block-centered">
			    <CardTitle title={this.props.card.title} subtitle={this.props.card.description} />
			</Card>
		);
	}
}

export default TodoCard;