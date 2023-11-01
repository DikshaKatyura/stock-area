import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.btn}
      onClick={props.onClick}
      style={props.style}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
