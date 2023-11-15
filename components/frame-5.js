import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-5.module.css";

const Frame = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/ng-nhp");
  }, [router]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.signIn}>{`Sign in `}</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} onClick={onRectangle1Click} />
        <div className={styles.signIn1}>{`Sign in `}</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <div className={styles.alreadyHasAn}>{`Already has an account  `}</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupDiv}>
          <div className={styles.groupItem} />
          <div className={styles.email}>{`Email  `}</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupItem} />
          <div className={styles.password}>{`Password `}</div>
          <img
            className={styles.removeRedEye}
            alt=""
            src="/remove-red-eye.svg"
          />
        </div>
        <div className={styles.groupItem} />
        <div className={styles.email}>{`User name `}</div>
      </div>
    </div>
  );
};

export default Frame;
