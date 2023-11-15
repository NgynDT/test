import styles from "./logout-form.module.css";

const LogoutForm = () => {
  return (
    <div className={styles.logOut}>
      <img
        className={styles.iconAccountLogout}
        alt=""
        src="/-icon-account-logout.svg"
      />
      <div className={styles.ngXut}>Đăng xuất</div>
    </div>
  );
};

export default LogoutForm;
