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
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
        }))
     }

    render() {
        return (
            <div>
                <Header />
                <TodosList 
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                />
            </div>
        )
    }

}

export default TodoContainer