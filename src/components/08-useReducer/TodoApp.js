import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || []
};
export const TodoApp = () => {
    //En el dispatch es donde enviamos el objeto action para q nuestro reducer sepa q hacer
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])    

    const handleAddTodo = (newTodo) => {
        const action = {
            type: 'add',
            paylod: newTodo
        }
        dispatch(action);
    }

    const handleDelete = (todoId) =>{
        const action = {
            type: 'delete',
            paylod: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            paylod: todoId
        };
        dispatch(action);
    }

    return (
        <div>   
            <h1>TodoApp ({ todos.length })</h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                {/* TodoList, todos, handleDelete, handleToggle */}
                <TodoList 
                    todos = {todos} 
                    handleDelete={handleDelete}
                    handleToggle = {handleToggle}/>

                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo= {handleAddTodo}
                    />
                </div>

            </div>
        </div>
    )
}

