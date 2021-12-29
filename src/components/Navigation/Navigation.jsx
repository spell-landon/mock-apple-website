import React from 'react';
import styles from './Navigation.module.css';

function Navigation(props) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navUl}>
        <li className={`${styles.apple} ${styles.navLink}`}>
          <i class='fab fa-apple'></i>
        </li>
        <li className={styles.navLink}>Store</li>
        <li className={styles.navLink}>Mac</li>
        <li className={styles.navLink}>iPad</li>
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
