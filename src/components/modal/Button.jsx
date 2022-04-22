import { button } from "./Button.module.css";

const Button = ({ toggleModal }) => {
  return (
    <button
      onClick={() => toggleModal()}
      type="button"
      className={button}
    ></button>
  );
};

export default Button;
