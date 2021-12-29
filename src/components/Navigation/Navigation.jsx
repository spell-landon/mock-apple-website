import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navUl}>
        <li className={`${styles.apple} ${styles.navLink}`}>
          <Link to='/' className={styles.Link}>
            <i class='fab fa-apple'></i>
          </Link>
        </li>

        <li className={styles.navLink}>
          <Link to='/store' className={styles.Link}>
            Store
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/mac' className={styles.Link}>
            Mac
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/ipad' className={styles.Link}>
            iPad
          </Link>
        </li>
        <li className={styles.navLink}>iPhone</li>
        <li className={styles.navLink}>Watch</li>
        <li className={styles.navLink}>AirPods</li>
        <li className={styles.navLink}>TV & Home</li>
        <li className={styles.navLink}>Only on Apple</li>
        <li className={styles.navLink}>Accessories</li>
        <li className={styles.navLink}>Support</li>
        <li className={styles.navLink}>
          <i className='fas fa-search'></i>
        </li>
        <li className={styles.navLink}>
          <i className='fas fa-shopping-bag'></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
