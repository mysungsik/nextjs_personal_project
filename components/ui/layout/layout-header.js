import Link from "next/link";
import styles from "./layout-header.module.css";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import DropDown from "./layout-dropdown";
import UserDropDown from "./layout-user-dropdown";

function LayoutHeader(props) {
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);

  let authenticatedId;
  if (session) {
    authenticatedId = session.user.email;
  }

  function showDropDown() {
    setShow(true);
  }

  function closeDropDown() {
    setShow(false);
  }

  function showUserDropDown() {
    setShowUser(true);
  }
  function hideUserDropDown() {
    setShowUser(false);
  }

  function signoutFunction() {
    signOut({ callbackUrl: "/" });
  }
  return (
    <header className={styles.header}>
      <div>
        <Link href={"/"}>
          <h1> Logo</h1>
        </Link>
      </div>
      <ul>
        {authenticatedId === "admin@admin.com" && (
          <li>
            <Link href={"/allfoods/adding"}> 추가페이지 </Link>
          </li>
        )}

        {status === "authenticated" && authenticatedId !== "admin@admin.com" && (
          <li onMouseOver={showUserDropDown} className={styles.userDropDown}>
            반갑습니다 {session.user.email} 님!
            <div onMouseLeave={hideUserDropDown}>
              {showUser && <UserDropDown />}
            </div>
          </li>
        )}
        <li className={styles.li}>
          <Link href={"/"}> 홈페이지</Link>
        </li>
        {status === "unauthenticated" && (
          <li className={styles.li}>
            <Link href={"/login"}> 로그인</Link>
          </li>
        )}
        <li className={styles.li} onMouseOver={showDropDown}>
          <div onMouseLeave={closeDropDown}>
            뭐먹지
            {show && <DropDown />}
          </div>
        </li>
        <li className={styles.li}>
          <Link href={"/calories"}> 칼로리계산기</Link>
        </li>
        <li className={styles.li}>
          <Link href={"contact"}> Contact</Link>
        </li>
        {status === "authenticated" && (
          <li className={styles.li}>
            <button className={styles.logout} onClick={signoutFunction}>
              로그아웃
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}

export default LayoutHeader;
