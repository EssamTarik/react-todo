import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import 'react-md/src/scss/_react-md.scss';
import 'react-md/dist/react-md.blue-light_blue.min.css';
import './App.css';

import {Button} from 'react-md';
import TodoColumn from './containers/TodoColumn';
import TestAction from './actions/TestAction';

class App extends Component {
  componentDidMount(){
  	this.props.TestAction();
  }
  render() {
    return (
    	<div style={{paddingTop: 10}}>
    	<h1>Todo App</h1>
    	<hr />
    	<div className="uk-grid">
    			<TodoColumn />
    			<TodoColumn />
		</div>
		<Button style={{position: 'absolute', bottom: 15, right: 15, height: 56, width: 56}} floating primary>add</Button>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {Test: state.Test};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({TestAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
