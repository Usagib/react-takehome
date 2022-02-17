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

    render() {
        return (
            <div>
                <Header />
                <TodosList todos={this.state.todos} />
            </div>
        )
    }

}

export default TodoContainer