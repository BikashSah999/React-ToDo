import { useState } from "react";
import classes from "./TodoAdd.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import TodoList from "./TodoList";

function TodoAdd() {
  const [inputData, changeInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleButton, setToggleButton] = useState(false);
  const [editItemId, setEditItemId] = useState(0);

  const addItems = () => {
    if (!inputData) {
      alert("Please Fill the data");
    } else if (inputData && toggleButton) {
      let newItems = [...items];
      newItems[editItemId] = inputData;
      setItems(newItems);
      changeInputData("");
      setToggleButton(false);
    } else {
      setItems([...items, inputData]);
      changeInputData("");
    }
  };

  const deleteItems = (id) => {
    const updatedItems = items.filter((item, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };

  const editItems = (id) => {
    changeInputData(items[id]);
    setToggleButton(true);
    setEditItemId(id);
  };

  return (
    <>
      <div className={classes.add}>
        <input
          type="text"
          placeholder="Add Your Todo here"
          value={inputData}
          onChange={(event) => changeInputData(event.target.value)}
        />
        {!toggleButton ? (
          <FontAwesomeIcon
            icon={faPlusSquare}
            className={classes.add_icon}
            onClick={addItems}
          />
        ) : (
          <FontAwesomeIcon icon={faPenSquare} onClick={addItems} />
        )}
      </div>
      {items.map((item, index) => {
        return (
          <TodoList
            todoItem={item}
            key={index}
            deleteItems={deleteItems}
            editItems={editItems}
            id={index}
          />
        );
      })}
    </>
  );
}

export default TodoAdd;
