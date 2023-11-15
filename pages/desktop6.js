import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import FormProduct from "../components/form-product";
import OrderShippingSection from "../components/order-shipping-section";
import styles from "./desktop6.module.css";

const Desktop6 = () => {
  const router = useRouter();

  const onImage12Click = useCallback(() => {
    router.push("/bubble-tee-form");
  }, [router]);

  return (
    <div className={styles.desktop6}>
      <Header />
      <FormProduct onImage12Click={onImage12Click} />
      <OrderShippingSection />
      <img className={styles.desktop6Child} alt="" src="/line-6.svg" />
    </div>
  );
};

export default Desktop6;
