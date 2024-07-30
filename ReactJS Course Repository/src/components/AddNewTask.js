import { useState } from "react";

export default function AddNewTask(props) {
    const [inputValue, setInputValue] = useState("");

    const handleChangeInputValue = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        const taskName = inputValue.trim();
        if (taskName.length > 0) {
            //console.log("handleAddTask");
            props.addTask(taskName);
            //reset input
            setInputValue("");
        } else {
            alert("Please enter some task");
        }
    };

    return (
        <div className="todo-input-container">
            <input
                value={inputValue}
                onChange={handleChangeInputValue}
                type="text" />
            <input
                type="button"
                className="btn"
                onClick={handleAddTask}
                disabled={inputValue.trim().length === 0}
                value="Add task" />
        </div>
    );
}