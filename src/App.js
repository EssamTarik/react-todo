import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import 'react-md/src/scss/_react-md.scss';
import 'react-md/dist/react-md.blue-light_blue.min.css';
import './App.css';

import {Button} from 'react-md';
import TodoColumn from './containers/TodoColumn';
import DoneColumn from './containers/DoneColumn';
import getTodos from './actions/getTodos';
import addTodo from './actions/addTodo';
import editTodo from './actions/editTodo';
import markAsDone from './actions/markAsDone';
import markAsUndone from './actions/markAsUndone';
import removeTodo from './actions/removeTodo';
import NewTodoDialog from './components/NewTodoDialog';
import EditTodoDialog from './components/EditTodoDialog';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {AddingTodo: false, EditingTodo: false, EditedItem: {}};
  }
  componentDidMount(){
  	this.props.getTodos();
  }
  render() {
    return (
    	<div style={{paddingTop: 10}}>
    	<h1>Todo App</h1>
    	<hr />
    	<div className="uk-grid">
    			<TodoColumn editTodo={(item) => {this.setState({EditingTodo: true, EditedItem: item})}} removeTodo={(key) => {this.props.removeTodo(key)}} markAsDone={(key) => {this.props.markAsDone(key)}} items={this.props.Todos.todo} />
    			<DoneColumn editTodo={(item) => {this.setState({EditingTodo: true, EditedItem: item})}} removeTodo={(key) => {this.props.removeTodo(key)}} markAsUndone={(key) => {this.props.markAsUndone(key)}} items={this.props.Todos.done}/>
		</div>
		<Button onClick={() => this.setState({AddingTodo: true})} style={{position: 'fixed', bottom: 15, right: 15, height: 56, width: 56}} floating primary>add</Button>
		<NewTodoDialog
			visible={this.state.AddingTodo}
			onSubmit={(data) => {this.props.addTodo(data);}}
			onHide={() => this.setState({AddingTodo: false})} />

    <EditTodoDialog
      visible={this.state.EditingTodo}
      item={this.state.EditedItem}
      onSubmit={(data) => {this.props.editTodo(data.key, data);}}
      onHide={() => this.setState({EditingTodo: false})} />
		</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {Todos: state.Todos};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({addTodo, getTodos, markAsDone, markAsUndone, removeTodo, editTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
