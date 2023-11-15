import { useCallback } from "react";
import { useRouter } from "next/router";
import BubbleTeeContainer from "./bubble-tee-container";
import OrderShippingSection1 from "./order-shipping-section1";
import Component1 from "./component1";
import styles from "./bubble-tee-form.module.css";

const BubbleTeeForm = () => {
  const router = useRouter();

  const onLOGOSTOREContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className={styles.property1default}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.logoStore} onClick={onLOGOSTOREContainerClick}>
          <img
            className={styles.logoStoreChild}
            alt=""
            src="/rectangle-2@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-3.svg" />
            <img className={styles.searchIcon} alt="" src="/search.svg" />
            <div className={styles.search}>SEARCH</div>
          </div>
          <img className={styles.userIcon} alt="" src="/user.svg" />
          <div className={styles.shoppingCart}>
            <img
              className={styles.shoppingCartIcon}
              alt=""
              src="/shoppingcart.svg"
            />
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.div}>1</div>
            </div>
          </div>
        </div>
        <div className={styles.navBar}>
          <div className={styles.speacialPrice}>SPEACIAL PRICE</div>
          <div className={styles.clothingParent}>
            <div className={styles.clothing}>CLOTHING</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
          <div className={styles.tShirt}>T-SHIRT</div>
          <div className={styles.tShirt}>POLO</div>
        </div>
      </div>
      <div className={styles.trangChTtCSnPhmParent}>
        <div className={styles.trangChContainer}>
          <span>{`TRANG CHỦ / TẤT CẢ SẢN PHẨM / `}</span>
          <span className={styles.bubbleTee}>{`BUBBLE TEE `}</span>
        </div>
        <div className={styles.frameInner} />
      </div>
      <BubbleTeeContainer />
      <OrderShippingSection1 />
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-20@2x.png"
          />
          <div className={styles.sizeChart}>{`SIZE CHART `}</div>
        </div>
        <div className={styles.ccSnPhm}>{`CÁC SẢN PHẨM LIÊN QUAN `}</div>
        <img
          className={styles.frameChild1}
          alt=""
          src="/rectangle-211@2x.png"
        />
        <img className={styles.frameChild2} alt="" src="/rectangle-22@2x.png" />
        <img className={styles.frameChild3} alt="" src="/rectangle-23@2x.png" />
        <div className={styles.happyTeeContainer}>
          <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
          <p className={styles.p}>380.000₫</p>
        </div>
        <div className={styles.happyTeeContainer1}>
          <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
          <p className={styles.p}>380.000₫</p>
        </div>
        <div className={styles.happyTeeContainer2}>
          <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
          <p className={styles.p}>380.000₫</p>
        </div>
      </div>
      <Component1
        component1Position="absolute"
        component1Top="659px"
        component1Left="818px"
        sLeft="42.35%"
        sFontSize="20px"
        sTextAlign="center"
        mLeft="44.71%"
        mFontSize="20px"
        mTextAlign="center"
        lLeft="41.18%"
        lFontSize="20px"
        lTextAlign="center"
        xLFontSize="20px"
      />
    </div>
  );
};

export default BubbleTeeForm;
