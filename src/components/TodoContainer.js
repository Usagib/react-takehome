
/*
class TodoContainer extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
       fetch("https://jsonplaceholder.typicode.com/todos?limit=10")
          .then(response => response.json())
          .then(data => this.setState({ todos: data }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

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

     addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
     }

     setUpdate = (updatedTitle, id) => {
         this.setState({
             todos: this.state.todos.map(todo => {
                 if (todo.id === id) {
                     todo.title = updatedTitle
                 }
                 return todo
             }),
         })
     }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList 
                        todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        handleDeleteProps={this.handleDelete}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}
*/

import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import NoMatch from "../pages/NoMatch";
import Navbar from "./Navbar";

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    function getInitialTodos() {
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    },[todos])

    const handleChange = id => {
        setTodos(prevState => {
            return (
                prevState.map(todo => {
                    if(todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                    return todo
                })
            )
            
        })
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    return(
    <React.Fragment>
        <Navbar />
         <Routes>
            <Route path="/" element={
                <div className="container">
                    <div className="inner">
                        <Header />
                        <InputTodo addTodoProps={addTodoItem}/>
                        <TodosList todos={todos}
                            handleChangeProps={handleChange}
                            deleteTodoProps={delTodo}
                            setUpdate={setUpdate}
                        />
                    </div>
                </div>
            }>
                
            </Route>
            <Route path="/about" component={<About />}>
            </Route>
            <Route path="*" element={<NoMatch/>}>
            </Route>
        </Routes>
    </React.Fragment>
    )
}
export default TodoContainer