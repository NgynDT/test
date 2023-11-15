import BubbleTeeForm from "../components/bubble-tee-form";
import styles from "./frame2.module.css";

const Frame2 = () => {
  return (
    <div className={styles.trangChiTitSnPhmParent}>
      <div className={styles.trangChiTitSnPhm}>
        <BubbleTeeForm />
      </div>
    </div>
  );
};

export default Frame2;
