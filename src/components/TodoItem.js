import React from "react";
import styles from "./TodoItem.module.css";
class TodoItem extends React.Component {
    state = {
        editing: false,
    }

    handleEditing = () => {
        this.setState(() => {
            return {
                editing: true,
            }
        })
    }

    handleUpdatedDone = e => {
        if (e.key === "Enter") {
            this.setState(()=> {
                return {
                    editing: false
                }
            })
        }
    }

    render() {
        let viewMode = {}
        let editMode = {}

        const { editing } = this.state;

        if(editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-trough",
        }

        const {completed, id, title} = this.props.todo;
        return (
            <>

            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing}>
                    <input
                            className={styles.checkbox} 
                            type="checkbox"
                            checked={completed}
                            onChange={() => this.props.handleChangeProps(id)}
                        />
                     <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                    <button onClick={() => this.props.handleDeleteProps(id)}>Delete</button>
                </div>
            </li>
            <input 
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdatedDone}
            />
           
        
            </>
        )}
    
}

export default TodoItem