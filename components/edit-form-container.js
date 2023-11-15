import { useMemo } from "react";
import styles from "./edit-form-container.module.css";

const EditFormContainer = ({ propTop, propBackgroundColor, propLeft }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propBackgroundColor]);

  const lineIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.editParent} style={frameDiv1Style}>
      <div className={styles.edit}>Edit</div>
      <img
        className={styles.frameChild}
        alt=""
        src="/line-23.svg"
        style={lineIconStyle}
      />
      <div className={styles.delelte}>Delelte</div>
    </div>
  );
};

export default EditFormContainer;
