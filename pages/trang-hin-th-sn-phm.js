import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import FormProduct from "../components/form-product";
import OrderShippingSection from "../components/order-shipping-section";
import styles from "./trang-hin-th-sn-phm.module.css";

const TrangHinThSnPhm = () => {
  const router = useRouter();

  const onImage12Click = useCallback(() => {
    router.push("/bubble-tee-form");
  }, [router]);

  return (
    <div className={styles.trangHinThSnPhm}>
      <Header />
      <FormProduct onImage12Click={onImage12Click} />
      <OrderShippingSection />
      <img className={styles.trangHinThSnPhmChild} alt="" src="/line-6.svg" />
    </div>
  );
};

export default TrangHinThSnPhm;
