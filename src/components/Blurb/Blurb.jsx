import React from 'react';
import styles from './Blurb.module.css';

function Blurb(props) {
  return (
    <p className={styles.blurb_p}>
      We look forward to welcoming you to our stores. Whether you{' '}
      <span className={styles.spanLink}>shop in a store</span> or <span className={styles.spanLink}>shop online</span>, our Specialists
      can help you buy the products you love.
    </p>
  );
}

export default Blurb;
