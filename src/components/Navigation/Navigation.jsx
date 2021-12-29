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
        <li className={styles.navLink}>
          <Link to='/iphone' className={styles.Link}>
            iPhone
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/watch' className={styles.Link}>
            Watch
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/airpods' className={styles.Link}>
            AirPods
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/tv-home' className={styles.Link}>
            TV & Home
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/services' className={styles.Link}>
            Only on Apple
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/accessories' className={styles.Link}>
            Accessories
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to='/support' className={styles.Link}>
            Support
          </Link>
        </li>
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
