import { useMemo } from "react";
import styles from "./address-form-container.module.css";

const AddressFormContainer = ({
  contactAddressContactEmai,
  otherAddressOtherEmail,
  showVectorIcon,
  propTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.vectorParent} style={frameDivStyle}>
      {showVectorIcon && (
        <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      )}
      <div className={styles.sACh}>{contactAddressContactEmai}</div>
      <div className={styles.aChKhc}>{otherAddressOtherEmail}</div>
    </div>
  );
};

export default AddressFormContainer;
