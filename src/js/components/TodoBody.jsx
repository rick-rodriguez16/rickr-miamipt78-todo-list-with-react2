import React, { useEffect } from "react";

const TodoBody = ({ todos, setTodos}) => {
    // create a useEffect to fetch data from the TODO API
    // First display it on the console

    useEffect(() => {
        fetchData();
    }, [])

    // a function to GET a user's todos
    function fetchData() {
        fetch(`https://playground.4geeks.com/todo/users/RickRod`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.todos);
                setTodos(data.todos);
            })
            .catch(error => {
                console.error('Looks like there is a problem: ', error)
            })
    }    

    // a function to render the todos array
    const renderTodos = todos.map(todoItem => {
        return (
            <li className="todo-item" key={todoItem.id}>
                <h4>{todoItem.label}
                    <span>
                        <button
                            className="delete-task"
                            onClick={() => deleteTodo(todoItem.id)}
                        >X</button>
                    </span>
                </h4>    
            </li>
        );
    })

    // a function to delete a selected todo element
    const deleteTodo = async (id) => {
        // 1. declare a variable called updatedTodos
        // 2. assign it with the FILTERED todos array by removing the todo with the passed id argument
        // todos.filter()
        // 3. SetTodos with the updatedTodos
        // 4. create the fetch needed to delete the todo item from the TODO API
        const updatedTodos = todos.filter((todoItem) => todoItem.id != id)
        setTodos(updatedTodos);

        //using async await
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Deletion successful!');
        } else {
            console.log('Error: ', response.status, response.statusText);
            return {
                error: {
                    status: response.status,
                    statusText: response.statusText
                }
            }
        }
    }


    // the return statement we focus only on display the "No tasks, add a task" string"
    return (
        <>
            <section className="main">
                <ul className="todo-list">
                    {todos.length !== 0 ? renderTodos : "No tasks. Add a task."}
                </ul>
            </section>
        </>
    );
}

export default TodoBody;
