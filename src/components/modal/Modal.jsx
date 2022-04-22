import {
  modal,
  modalContent,
  modalHeader,
  modalTitle,
  modalHeaderButton,
  modalMain,
  modalFooter,
  modalFooterButton,
} from "./Modal.module.css";
import Form from "./Form";

const Modal = (props) => {
  const { show, toggleModal, add } = props;

  const content = show && (
    <div className={modal}>
      <div className={modalContent}>
        <div className={modalHeader}>
          <span className={modalTitle}>Header</span>
          <button
            onClick={() => toggleModal()}
            type="button"
            className={modalHeaderButton}
          >
            X
          </button>
        </div>
        <div className={modalMain}>
          <Form {...props} />
        </div>
        <div className={modalFooter}>
          <button onClick={() => add()} className={modalFooterButton}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return content;
};

export default Modal;
