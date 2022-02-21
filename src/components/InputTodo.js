/* class InputTodo extends React.Component {
    state = {
        title: "",
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        } else {
            alert("Please write item")
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
              
                    <input
                        name="title"
                        className="input-text" 
                        type="text"
                        placeholder="Add Todo"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <button className="input-submit">Submit</button>
            </form>
        )
    }
} */

import React, { useState } from "react";

const InputTodo = props => {
    const [inputText, setinputText] = useState({
        title:""
    });

    const onChange = event => {
        setinputText(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(inputText.title.trim()){
            props.addTodoProps(inputText.title)
            setinputText({ title: "" })
        } else {
            alert("please write item")
        }
    }

    return(
        <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
    )
}

export default InputTodo