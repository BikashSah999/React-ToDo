import classes from "./TodoList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";

function TodoList({ todoItem, deleteItems, editItems, id }) {
  return (
    <div className={classes.list}>
      <div className={classes.content}>{todoItem}</div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className={classes.add_icon}
        onClick={() => deleteItems(id)}
      />
      <FontAwesomeIcon
        icon={faPenSquare}
        className={classes.add_icon}
        onClick={() => editItems(id)}
      />
    </div>
  );
}

export default TodoList;
