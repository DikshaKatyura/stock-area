import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};

const Modal = (props) => {

  const closeSettingHandler = () => {
    
  };

  return (
    <>
      {createPortal(
        <Backdrop onClose={closeSettingHandler} />,
        document.getElementById("overlays")
      )}
      {createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
