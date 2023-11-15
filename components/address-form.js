import styles from "./address-form.module.css";

const AddressForm = () => {
  return (
    <div className={styles.address}>
      <div className={styles.ngNguynDuQun1ThnhPhParent}>
        <div className={styles.ngNguynDu}>
          123 Đường Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh
        </div>
        <img className={styles.clothesIcon} alt="" src="/clothes@2x.png" />
      </div>
      <div className={styles.ngCmt8QunTnBnhThnhParent}>
        <div className={styles.ngNguynDu}>
          456 Đường CMT8, Quận Tân Bình, Thành phố Hồ Chí Minh
        </div>
        <img className={styles.clothesIcon} alt="" src="/clothes1@2x.png" />
      </div>
      <div className={styles.linH0969404274Wrapper}>
        <div className={styles.linH0969404274}>
          Liên hệ:
          <span className={styles.span}>0969404274</span>
        </div>
      </div>
      <div className={styles.contactUs}>Contact us</div>
    </div>
  );
};

export default AddressForm;
