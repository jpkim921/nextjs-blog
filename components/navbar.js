import Link from "next/link";
import styles from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className={styles.navLink}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link href="#">
            <a>Posts</a>
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link href="#">
            <a>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
