import React from 'react';
import styles from './Models.module.css';

function Models(props) {
  return (
    <>
      {/* Model 1 */}
      <section className={styles.model_1}>
        <ul className={styles.ulEl}>
          <li className={styles.appleLogo}>
            <i className={styles.appleLogo} class='fab fa-apple'></i>
          </li>
        </ul>

        <h1 className={styles.title}>Actually, there is a "you" in gift.</h1>
        <h2 className={styles.link}>Shop ></h2>
        <ul className={styles.productImages}>
          <li className={styles.item1}>Item 1</li>
          <li className={styles.item2}>Item 2</li>
          <li className={styles.item3}>Item 3</li>
        </ul>
      </section>
      {/* Model 2 */}
      <section className={styles.model_2}>
        <h1 className={styles.title}>iPhone 13 Pro</h1>
        <h2 className={styles.subtitle}>Oh. So. Pro.</h2>
        <div className={styles.links}>
          <p className={styles.link}>Learn more ></p>
          <p className={styles.link}>Buy ></p>
        </div>
      </section>
    </>
  );
}

export default Models;
