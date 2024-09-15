import LayoutHeaderForMobile from "./layout-header-for-mobile";
import LayoutHeaderForWeb from "./layout-header-for-web";
import styles from "./layout-header.module.css";

function LayoutHeader() {
  return (
    <div>
      버젼연습
      <header className={styles.headerForWeb}>
        <LayoutHeaderForWeb />
      </header>
      <header className={styles.headerForMobile}>
        <LayoutHeaderForMobile />
      </header>
    </div>
  );
}
export default LayoutHeader;
