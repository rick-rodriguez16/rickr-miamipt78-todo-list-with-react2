import React, { useState } from "react";

// does this component take in any props?
const TodoHeader = ({ todos, setTodos }) => {
    // create 2 useStates that will capture the user input (string) and apply a counter to the todo object
    const [newTodo, setNewTodo] = useState("");

    
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

    // Remember, we will need to do the following
    // 1. Validate the input
    // 2. Create a newTodo object with the string and counter
    // 3. Append the object to the todo state array

    const validateInput = () => {
        // step 1
        if (!newTodo || newTodo === "" || newTodo === undefined) {
            alert("Please add a task!")
        }
        else {
            // there is a string in the text box and we are ready to move to step 2
            //console.log("newTodo text validated!");
            addTask();
        }
    }

    const addTask = () => {
        // this function will handle steps 2 and 3
        //console.log("Creating new todo: ", newTodo);

        // step 2 - creating the todo object
        const newTodoObj = {
            label: newTodo
        }

        // step 3 - append the todo object to the todo array
        // const appendedArray = [...todos, newTodoObj];
        // setTodos(appendedArray);

        // this is another way to append
        // setTodos([...todos, {
        //     id: counter,
        //     todo: newTodo
        // }])

        setNewTodo("");

        // step 4. create a new function to fetch a POST
        postNewTask(newTodoObj);
    }

    const postNewTask = async (todoObject) => {
                                // fetch needs 2 arguments for a POST (URL, {options})
        const response = await fetch("https://playground.4geeks.com/todo/todos/RickRod", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoObject)
        });
        
        if (response.ok) {
            console.log("Todo successfully added!");
        }
        else {
            console.log('Error: ', response.status, response.statusText);
            return {
                error: {
                    status: response.status,
                    statusText: response.statusText
                }
            }
        }
        fetchData();
    }

    return (
        <>
            <header className="todo-header">
                <input 
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={newTodo}
                    onChange={event => setNewTodo(event.target.value)}
                />
                <button 
                    className="add-task"
                    onClick={validateInput}
                >Add Task
                </button>
            </header>
        </>
    );
}

export default TodoHeader;
