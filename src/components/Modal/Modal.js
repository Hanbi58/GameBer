import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.toggleShowModal} />;
};
const ModalOverplay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggleShowModal={props.toggleShowModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverplay>{props.children}</ModalOverplay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
