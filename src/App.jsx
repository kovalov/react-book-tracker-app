import { useState } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Button from "./components/modal/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
    setBook({
      title: "",
      author: "",
      status: "",
    });
  };

  const [books, setBooks] = useState([
    { id: 0, title: "Test book", author: "", status: "" },
  ]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    status: "",
  });

  const add = () => {
    setBooks([...books, { id: Date.now(), ...book }]);
    toggleModal();
  };

  const remove = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Modal
        show={show}
        toggleModal={toggleModal}
        book={book}
        setBook={setBook}
        add={add}
      />
      <List books={books} remove={remove} />
      <Button toggleModal={toggleModal}></Button>
    </div>
  );
};

export default App;
