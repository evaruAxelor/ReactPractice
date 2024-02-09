import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({

    //Here, we are just providing total properties/values and methods of this app
    todos : [
        {
            id :1,
            todo : "Todo msg",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}


})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider