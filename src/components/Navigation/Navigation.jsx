import React from 'react';
import styles from './Navigation.module.css';

function Navigation(props) {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.apple}>
          <i class='fab fa-apple'></i>
        </li>
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Only on Apple</li>
        <li>Accessories</li>
        <li>Support</li>
        <li>
          <i className='fas fa-search'></i>
        </li>
        <li>
          <i className='fas fa-shopping-bag'></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
