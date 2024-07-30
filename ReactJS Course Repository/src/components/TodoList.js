import { DeleteOutlined } from "@ant-design/icons";

export default function TodoList (props) {
    const handleDeleteTask = (position) => {
        //console.log("handleDeleteTask ", position);
        props.deleteTask(position);
    };

    //console.log("props ", props);
    return (
        <ul className="todo-list">
            {props.todos.map((todo, i) => {
                //console.log("todo ", todo);
                return(
                    <li key={i}>
                        {todo}
                        <DeleteOutlined
                            onClick={() => handleDeleteTask(i)} 
                            className="delete-icon" />
                    </li>
                );
            })}
        </ul>
    );
} 