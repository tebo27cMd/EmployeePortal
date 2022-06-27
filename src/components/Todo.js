import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ViewEmployee({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [lastName, setLastName] = React.useState(todo.lastName);
  const [email, setEmail] = React.useState(todo.email);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
      setLastName(todo.lastName);
      setEmail(todo.email)
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
      todo.lastName = "";
      setLastName(e.target.value);
      todo.email = "";
      setEmail(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
        <input
        
        type="text"
        value={todo.lastName === "" ? lastName : todo.lastName}
        className="list"
        onChange={handleChange}
      />
        <input
       
        type="text"
        value={todo.email === "" ? email : todo.email}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo,newTitle,lastName,email)} >
        <EditIcon id="i" />

        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
        <DeleteIcon id="i" />
        </button>

      </div>
    </div>
  );
}
