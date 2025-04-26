import React from "react";

const TodoFooter = ({ todos }) => {

    return (
        <>
            <footer className="footer">
                {
                    // create a ternary that will display the grammatically correct 
                    // number of items left
                    todos.length !== 1 ? `${todos.length} items left` : `${todos.length} item left`
                }
            </footer>
        </>
    );
}

export default TodoFooter;
