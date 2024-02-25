import { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            title: "Todo 1",
            description: "This is the first todo",
            done: false
        },
        {
            title: "Todo 2",
            description: "This is the second todo",
            done: false
        }
    ]);

    const [visibility, setVisibility] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rerenderFlag, setRerenderFlag] = useState(false); // State variable to trigger rerender

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            setTitle(value);
        } else if (name === "description") {
            setDescription(value);
        }
    };

    const add = () => {
        if (title && description) {
            const newTodo = {
                title: title,
                description: description,
                done: false
            };
            setTodos([...todos, newTodo]);
            toggleVisibility();
            setTitle("");
            setDescription("");
        }
    };

    const toggleDone = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        setTodos(updatedTodos);
        setRerenderFlag(!rerenderFlag);
    };

    return (
        <>
            <div className="my-4 mx-8 py-2 px-3">
                <div className="flex justify-end">
                    <button className="border bg-gray-800 text-white py-2 px-3 mb-3 text-2xl font-bold right-0" onClick={toggleVisibility}>
                        {visibility ? "- Hide Form" : "+ Add Todo"}
                    </button>
                </div>
                {visibility && (
                    <div className="w-max m-auto border-2 p-3 mb-6">
                        <input type="text" className="block border-2 shadow-md py-1 px-2 my-4 w-96" placeholder="Title" value={title} onChange={handleInputChange} name="title" />
                        <input type="text" className="block border-2 shadow-md py-1 px-2 my-4 w-96" placeholder="Description" value={description} onChange={handleInputChange} name="description" />
                        <button className="block shadow-md bg-gray-800 text-lg font-bold text-white py-1.5 px-3 mx-auto" onClick={add}>Add</button>
                    </div>
                )}
                <div className="border-2 shadow-md px-5 py-4">
                    <h1 className="text-3xl font-bold"> - Todos</h1>
                    <div className="mt-4">
                        {todos.map((todo, index) => (
                            <div key={index} className="border-b-2 py-2">
                                <h2 className={`text-xl font-bold ${todo.done ? "line-through" : ""}`}>{todo.title}</h2>
                                <h2 className={`text-xl ${todo.done ? "line-through" : ""}`}>{todo.description}</h2>
                                <button className={`bg-gray-800 text-white font-bold py-1 px-2`} onClick={() => toggleDone(index)}>{todo.done ? "Not Completed" : "Mark as Completed"}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todos;
