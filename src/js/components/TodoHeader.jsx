import React, { useState } from "react";

// does this component take in any props?
const TodoHeader = ({ todos, setTodos }) => {
    // create 2 useStates that will capture the user input (string) and apply a counter to the todo object
    const [newTodo, setNewTodo] = useState("");
    const [counter, setCounter] = useState(0);

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
            console.log("newTodo text validated!");
            addTask();
        }
    }

    const addTask = () => {
        // this function will handle steps 2 and 3
        console.log("Creating new todo: ", newTodo);

        // step 2 - creating the todo object
        const newTodoObj = {
            id: counter,
            todo: newTodo
        }

        // step 3 - append the todo object to the todo array
        const appendedArray = [...todos, newTodoObj];
        setTodos(appendedArray);

        // this is another way to append
        // setTodos([...todos, {
        //     id: counter,
        //     todo: newTodo
        // }])

        setCounter(counter + 1);
        setNewTodo("");

        console.log("Current list of todos: ", appendedArray);
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
