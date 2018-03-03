import React, { PureComponent } from 'react';
import { Button, DialogContainer, TextField } from 'react-md';

export default class EditTodoDialog extends PureComponent {
  constructor(props){
    super(props);
    this.state = {title: '', description: '', errors: {}};
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.item.key && this.props.item.key !== nextProps.item.key)
      this.setState({title: nextProps.item.title, description: nextProps.item.description, errors: {}});
  }
  validate(){
    let errors = {};
    if(this.state.title.length === 0)
      errors['title'] = 'This Field can\'t be empty';
    if(this.state.description.length === 0)
      errors['description'] = 'This Field can\'t be empty';
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      this.props.onHide();
      this.props.onSubmit({title: this.state.title, description: this.state.description, key: this.props.item.key});
    }
  }
  submit(){
    this.validate();
  }
  render() {
    console.log(this.props.item);
    const actions = [];
    actions.push({ secondary: true, children: 'Cancel', onClick: this.props.onHide });
    actions.push(<Button flat primary onClick={() => this.submit()}>Confirm</Button>);

    return (
        <DialogContainer
          id="simple-action-dialog"
          visible={this.props.visible}
          onHide={this.props.onHide}
          actions={actions}
          title="Change something?"
        >
          <TextField
            id="title"
            label="Title"
            placeholder="Title"
            value={this.state.title}
            onChange={(title) => {this.setState({title})}}
            error={this.state.errors.title?true:false}
            errorText={this.state.errors.title}
          />
          <TextField
            id="description"
            label="Description"
            placeholder="Description"
            onChange={(description) => {this.setState({description})}}
            value={this.state.description}
            error={this.state.errors.description?true:false}
            errorText={this.state.errors.description}
          />
        </DialogContainer>
    );
  }
}
