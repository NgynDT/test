import { useState, useCallback } from "react";
import NgNhp from "../components/ng-nhp";
import PortalPopup from "../components/portal-popup";
import NewProductsContainer from "../components/new-products-container";
import FormContainer from "../components/form-container";
import AddressSection from "../components/address-section";
import styles from "./home.module.css";

const Home = () => {
  const [isNgNhpOpen, setNgNhpOpen] = useState(false);

  const openNgNhp = useCallback(() => {
    setNgNhpOpen(true);
  }, []);

  const closeNgNhp = useCallback(() => {
    setNgNhpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.logoStore}>
            <img
              className={styles.logoStoreChild}
              alt=""
              src="/rectangle-2@2x.png"
            />
          </div>
          <div className={styles.groupParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/rectangle-3.svg"
              />
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.search}>SEARCH</div>
            </div>
            <img
              className={styles.userIcon}
              alt=""
              src="/user.svg"
              onClick={openNgNhp}
            />
            <div className={styles.shoppingCart}>
              <img
                className={styles.shoppingCartIcon}
                alt=""
                src="/shoppingcart.svg"
              />
              <div className={styles.ellipseParent}>
                <div className={styles.groupItem} />
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
        <img className={styles.homeChild} alt="" src="/rectangle-4@2x.png" />
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.aboutTheShop}>About The Shop</div>
        <div className={styles.choMngBnContainer}>
          <span>{`Chào mừng bạn đến với `}</span>
          <span className={styles.genz}>GENZ</span>
          <span>
            {" "}
            , điểm đến duy nhất cho thời trang và phụ kiện hàng đầu. Chúng tôi
            cam kết mang đến cho bạn những xu hướng mới nhất, chất lượng xuất
            sắc và trải nghiệm mua sắm đáng nhớ sẽ khiến bạn quay trở lại nhiều
            lần hơn.
          </span>
        </div>
        <div className={styles.homeInner}>
          <img
            className={styles.groupInner}
            alt=""
            src="/rectangle-51@2x.png"
          />
        </div>
        <NewProductsContainer />
        <FormContainer />
        <AddressSection />
      </div>
      {isNgNhpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNgNhp}
        >
          <NgNhp onClose={closeNgNhp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
