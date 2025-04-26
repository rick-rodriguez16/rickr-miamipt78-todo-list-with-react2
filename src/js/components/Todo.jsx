import React, { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

const Todo = () => {
    // the todos array state will be housed here for the children components
    // we can pass it as props to them
    const [todos, setTodos] = useState([]);

    return (
        <>
            <h1>todos</h1>
            <div>
                <TodoHeader 
                    todos={todos} 
                    setTodos={setTodos}
                />
            </div>
            <div>
                <TodoBody 
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            <div>
                <TodoFooter 
                    todos={todos}
                />
            </div>
        </>
    );
}

export default Todo;
