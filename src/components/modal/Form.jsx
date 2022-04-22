import {
  form,
  formGroup,
  formLabel,
  formInput,
  formSelect,
  formOption,
} from "./Form.module.css";

const Form = ({ book, setBook }) => {
  const { title, author } = book;

  return (
    <form className={form}>
      <div className={formGroup}>
        <label htmlFor="" className={formLabel}>
          Title
        </label>
        <input
          value={title}
          onChange={(event) => setBook({ ...book, title: event.target.value })}
          type="text"
          className={formInput}
        />
      </div>
      <div className={formGroup}>
        <label htmlFor="" className={formLabel}>
          Author
        </label>
        <input
          value={author}
          onChange={(event) => setBook({ ...book, author: event.target.value })}
          type="text"
          className={formInput}
        />
      </div>
      <div className={formGroup}>
        <label htmlFor="" className={formLabel}>
          Status
        </label>
        <select
          onChange={(event) => setBook({ ...book, status: event.target.value })}
          name=""
          id=""
          className={formSelect}
        >
          <option value="One" className={formOption}>
            One
          </option>
        </select>
      </div>
    </form>
  );
};

export default Form;
