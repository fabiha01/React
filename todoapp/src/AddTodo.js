import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ''

    }
    handleChange = (e) => {
        this.setState({
            // set the content to the value of the input field
            content: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        // will clear out the input field
        // need to bind the value of the
        // input field to the state
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;