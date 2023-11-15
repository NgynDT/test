import AddressFormContainer from "../components/address-form-container";
import LogoutForm from "../components/logout-form";
import FormContainer1 from "../components/form-container1";
import PaymentFormContainer from "../components/payment-form-container";
import styles from "./trang-thanh-ton.module.css";

const TrangThanhTon = () => {
  return (
    <div className={styles.trangThanhTon}>
      <img
        className={styles.trangThanhTonChild}
        alt=""
        src="/rectangle-21@2x.png"
      />
      <div className={styles.thngTinNhn}>Thông tin nhận hàng</div>
      <div className={styles.vnChuyn}>Vận chuyển</div>
      <div className={styles.thanhTon}>Thanh toán</div>
      <div className={styles.trangThanhTonItem} />
      <AddressFormContainer
        contactAddressContactEmai="Số địa chỉ"
        otherAddressOtherEmail="Địa chỉ khác..."
        showVectorIcon
      />
      <AddressFormContainer
        contactAddressContactEmai="Email"
        otherAddressOtherEmail="Nhập email..."
        showVectorIcon={false}
        propTop="708px"
      />
      <AddressFormContainer
        contactAddressContactEmai="Họ và tên"
        otherAddressOtherEmail="Nhập tên..."
        showVectorIcon={false}
        propTop="830px"
      />
      <AddressFormContainer
        contactAddressContactEmai="Số điện thoại"
        otherAddressOtherEmail="Nhập sđt..."
        showVectorIcon={false}
        propTop="952px"
      />
      <AddressFormContainer
        contactAddressContactEmai="Địa chỉ"
        otherAddressOtherEmail="Nhập địa chỉ..."
        showVectorIcon={false}
        propTop="1074px"
      />
      <AddressFormContainer
        contactAddressContactEmai="Tỉnh thành"
        otherAddressOtherEmail="---"
        showVectorIcon
        propTop="1196px"
      />
      <AddressFormContainer
        contactAddressContactEmai="Quận huyện"
        otherAddressOtherEmail="Nhập quận huyện..."
        showVectorIcon
        propTop="1318px"
      />
      <AddressFormContainer
        contactAddressContactEmai="Phường xã"
        otherAddressOtherEmail="Nhập phường xã..."
        showVectorIcon
        propTop="1440px"
      />
      <AddressFormContainer
        contactAddressContactEmai="Ghi chú (tùy chọn)"
        otherAddressOtherEmail="Địa chỉ khác..."
        showVectorIcon={false}
        propTop="1562px"
      />
      <LogoutForm />
      <FormContainer1 />
      <PaymentFormContainer />
      <div className={styles.nHngSnPhmParent}>
        <div className={styles.nHng}>Đơn hàng ( ... sản phẩm )</div>
        <div className={styles.frameParent}>
          <div className={styles.frameChild} />
          <div className={styles.image4Parent}>
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            <div className={styles.snPhm1}>Sản phẩm 1</div>
            <div className={styles.sizeSnPhm}>Size sản phẩm 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrangThanhTon;
