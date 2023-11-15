import { useState, useCallback } from "react";
import Frame from "./frame-5";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./remember-me-form.module.css";

const RememberMeForm = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const router = useRouter();

  const onRectangle4Click = useCallback(() => {
    router.push("/home");
  }, [router]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.rememberMe}>{`Remember me `}</div>
        </div>
        <div className={styles.lostYourPassword}>{`Lost your password ? `}</div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.userName}>{`User name `}</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupItem} />
          <div className={styles.password}>{`Password `}</div>
          <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} onClick={onRectangle4Click} />
          <div className={styles.signIn}>{`Sign in `}</div>
        </div>
        <div className={styles.rectangleParent2} onClick={openFrame}>
          <div className={styles.groupItem} />
          <div className={styles.createAnAccount}>{`Create an account `}</div>
        </div>
        <img className={styles.removeRedEye} alt="" src="/line-6.svg" />
        <div className={styles.loginParent}>
          <div className={styles.login}>Login</div>
          <img className={styles.lineIcon} alt="" src="/line-6.svg" />
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default RememberMeForm;
