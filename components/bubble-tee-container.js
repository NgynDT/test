import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./bubble-tee-container.module.css";

const BubbleTeeContainer = () => {
  const router = useRouter();

  const onRectangle3Click = useCallback(() => {
    router.push("/group-component");
  }, [router]);

  const onMUANGAYTextClick = useCallback(() => {
    router.push("/trang-thanh-ton");
  }, [router]);

  return (
    <div className={styles.image1Parent}>
      <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
      <img className={styles.frameChild} alt="" src="/rectangle-10@2x.png" />
      <img className={styles.frameItem} alt="" src="/rectangle-11@2x.png" />
      <img className={styles.frameInner} alt="" src="/rectangle-12@2x.png" />
      <div className={styles.bubbleTee}>{`BUBBLE TEE `}</div>
      <div className={styles.thngHiu}>THƯƠNG HIỆU : GENZ</div>
      <div className={styles.tnhTrng}>{`TÌNH TRẠNG : CÒN HÀNG  `}</div>
      <div className={styles.cThitKContainer}>
        <p
          className={styles.cThitK}
        >{`Được thiết kế đơn giản và được làm từ vật liệu chất `}</p>
        <p
          className={styles.cThitK}
        >{`lượng cao. Sự kết hợp hình học và vật liệu đẹp mắt `}</p>
        <p className={styles.cThitK}>của nó tạo ra một cái nhìn hiện đại.</p>
      </div>
      <div className={styles.kchThc}>{`KÍCH THƯỚC :  `}</div>
      <div className={styles.div}>380.000₫</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.frameChild1} onClick={onRectangle3Click} />
      <div className={styles.frameChild2} />
      <div className={styles.thmVoGi}>{`THÊM VÀO GIỎ `}</div>
      <div className={styles.div1}>-</div>
      <div className={styles.div2}>1</div>
      <div className={styles.div3}>{`+ `}</div>
      <div
        className={styles.muaNgay}
        onClick={onMUANGAYTextClick}
      >{`MUA NGAY `}</div>
    </div>
  );
};

export default BubbleTeeContainer;
