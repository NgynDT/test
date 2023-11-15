import { useCallback } from "react";
import ContainerProductForm from "./container-product-form";
import { useRouter } from "next/router";
import styles from "./new-products-container.module.css";

const NewProductsContainer = () => {
  const router = useRouter();

  const onBUTTONContainerClick = useCallback(() => {
    router.push("/trang-hin-th-sn-phm");
  }, [router]);

  return (
    <div className={styles.listProducts}>
      <div className={styles.listProductsChild} />
      <div className={styles.newProducts}>NEW PRODUCTS</div>
      <div className={styles.listProductItems}>
        <ContainerProductForm imageDimensions="/image-18@2x.png" />
        <ContainerProductForm
          imageDimensions="/image-19@2x.png"
          propZIndex="1"
          propWidth="unset"
        />
        <ContainerProductForm
          imageDimensions="/image-110@2x.png"
          propZIndex="2"
          propWidth="unset"
        />
        <div className={styles.button} onClick={onBUTTONContainerClick}>
          <div className={styles.xemTtC}>XEM TẤT CẢ</div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsContainer;
