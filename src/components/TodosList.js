import React from "react";
import TodoItem from "./TodoItem";

/* class TodosList extends React.Component {
    render() {
        return(
            <ul className="list-group">
            {this.props.todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={this.props.handleChangeProps}
                    handleDeleteProps={this.props.handleDeleteProps}
                    setUpdate={this.props.setUpdate}
                />
            ))}
            </ul>
        )
    }
} */

const TodosList = props => {
    console.log(props.todos);
    return (
      <ul>
        {props.todos.map(todo => {
            return (
                <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            setUpdate={props.setUpdate}
          />
            )
        })}
         
      </ul>
    )
  }

export default TodosList