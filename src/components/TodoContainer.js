import React from "react";
import Header from "./Header";
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Set up unitary tests",
                completed: false
            },
            {
                id: 3,
                title: "Setup production deployment",
                completed: true
            }
        ]
    };

    handleChange = id => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                    return todo
                })
            } 
        })
     };

     handleDelete = id => {
         this.setState({
             todos: [
                 ...this.state.todos.filter(todo => {
                     return todo.id !== id;
                 })
             ]
         });
     };

    render() {
        return (
            <div>
                <Header />
                <TodosList 
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    handleDeleteProps={this.handleDelete}
                />
            </div>
        )
    }

}

export default TodoContainer