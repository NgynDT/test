import Frame from "../components/frame-5";
import styles from "./ng-k.module.css";

const NgK = () => {
  return (
    <div className={styles.ngK}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-25@2x.png" />
        <div className={styles.phongCchL}>
          Phong cách là cách bạn thể hiện bản thân
        </div>
      </div>
      <Frame />
    </div>
  );
};

export default NgK;
