import styles from "./form-product.module.css";

const FormProduct = ({ onImage12Click }) => {
  return (
    <div className={styles.containerProduct}>
      <div className={styles.containerProductChild} />
      <div className={styles.danhMcSn}>DANH MỤC SẢN PHẨM</div>
      <div className={styles.ttCSn}>TẤT CẢ SẢN PHẨM</div>
      <div className={styles.ttCSn1}>TẤT CẢ SẢN PHẨM</div>
      <div className={styles.tShirt}>T-SHIRT</div>
      <div className={styles.jacket}>JACKET</div>
      <div className={styles.pants}>PANTS</div>
      <div className={styles.spXpParent}>
        <div className={styles.spXp}>Sắp xếp :</div>
        <div className={styles.groupChild} />
        <div className={styles.mcNh}>Mặc định</div>
        <img
          className={styles.chevronDownIcon}
          alt=""
          src="/chevrondown1.svg"
        />
      </div>
      <div className={styles.listProductItems}>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-15@2x.png" />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName1}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-16@2x.png" />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName1}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img
            className={styles.image1Icon2}
            alt=""
            src="/image-17@2x.png"
            onClick={onImage12Click}
          />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName3}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-17@2x.png" />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName3}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-17@2x.png" />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName5}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-16@2x.png" />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName1}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-17@2x.png" />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName1}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-17@2x.png" />
        </div>
        <div className={styles.itemProducts}>
          <div className={styles.itemProductsChild} />
          <div className={styles.priceName1}>
            <div className={styles.lineBoxyRaglan}>
              LINE BOXY RAGLAN TEE - CREAM
            </div>
            <div className={styles.lineBoxyRaglan}>380.000₫</div>
          </div>
          <img className={styles.image1Icon} alt="" src="/image-16@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FormProduct;
