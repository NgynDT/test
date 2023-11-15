import AddressForm from "./address-form";
import FollowUsContainer from "./follow-us-container";
import styles from "./address-section.module.css";

const AddressSection = () => {
  return (
    <div className={styles.footerParent}>
      <div className={styles.footer} />
      <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png" />
      <AddressForm />
      <div className={styles.address}>
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.giiThiu}>Giới thiệu</div>
        <div className={styles.hngDnMua}>Hướng dẫn mua hàng</div>
        <div className={styles.chnhSchI}>Chính sách đổi trả</div>
      </div>
      <FollowUsContainer />
    </div>
  );
};

export default AddressSection;
