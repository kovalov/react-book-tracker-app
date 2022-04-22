import { list, listItem, listButton } from "./List.module.css";

const List = ({ books, remove }) => {
  return (
    <ul className={list}>
      {books.map(({ id, title, author, status }) => (
        <li key={id} className={listItem}>
          {title}
          <button onClick={() => remove(id)} className={listButton}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
