import { forwardRef } from "react";
import styles from "./Inputs.module.css";

const Inputs = forwardRef((props, ref) => {
  return (
    <div
      className={`${styles.inputs} ${
        props.details.type === "radio" && styles.radios
      }`}
    >
      <label htmlFor={props.details.id}>{props.details.id}:</label>
      <input
        ref={ref}
        id={props.details.id}
        type={props.details.type}
        defaultValue={props.details.defaultValue}
        disabled={props.details.disabled}
      />
    </div>
  );
});

export default Inputs;
