import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import "../../Fonts.css";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link
            to="/그룹소개"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>그룹소개</div>
          </Link>
          <div className={styles.inner}>
            <ul className={styles.dropdown}>
              <li>인사말</li>
              <li>대표이사 소개</li>
            </ul>
          </div>
        </li>

        <li className={styles.item}>
          <Link
            to="/기사모집"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>기사모집</div>
          </Link>

          <ul className={styles.dropdown}>
            <li>입사절차</li>
            <li>입사서류</li>
            <li>찾아오는 길</li>
          </ul>
        </li>

        <li className={styles.item}>
          <Link
            to="/하이택시"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>하이택시</div>
          </Link>

          <ul className={styles.dropdown}>
            <li>업체정보</li>
          </ul>
        </li>

        <li className={styles.item}>
          <Link
            to="/다연상운"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>다연상운</div>
          </Link>

          <ul className={styles.dropdown}>
            <li>업체정보</li>
          </ul>
        </li>

        <li className={styles.item}>
          <Link
            to="/고객마당"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>고객마당</div>
          </Link>

          <ul className={styles.dropdown}>
            <li>공지사항</li>
            <li>민원접수</li>
            <li>분실물</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
