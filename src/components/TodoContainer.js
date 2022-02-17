import React from "react";

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
                <h1>React Test</h1>
                <ul>
                    {this.state.todos.map(todo => (
                        <li key={"todo-"+todo.id} >{todo.title}</li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default TodoContainer