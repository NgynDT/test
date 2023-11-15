import styles from "./payment-form-container.module.css";

const PaymentFormContainer = () => {
  return (
    <div className={styles.codParent}>
      <div className={styles.cod}>
        <div className={styles.codChild} />
        <div className={styles.thanhTonKhi}>Thanh toán khi giao hàng</div>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.vietqr}>
        <div className={styles.codChild} />
        <div className={styles.thanhTonKhi}>Thanh toán qua VietQR</div>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
    </div>
  );
};

export default PaymentFormContainer;
