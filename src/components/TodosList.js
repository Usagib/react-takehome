import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
    render() {
        return(
            <ul className="list-group">
            {this.props.todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={this.props.handleChangeProps}
                    handleDeleteProps={this.props.handleDeleteProps}
                />
            ))}
            </ul>
        )
    }
}

export default TodosList