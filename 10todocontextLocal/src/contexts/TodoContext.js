/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false,
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },

})

export const TodoProvider = TodoContext.Provider;

// export default function useTodo() {
//     return useContext(TodoContext);
// }
// or

export const useTodo = () => {
    return useContext(TodoContext)
}