import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Models.module.css';
import ipads from '../../assets/ipads.jpeg';
import macbooks from '../../assets/macbooks.jpeg';
import ipads_2 from '../../assets/ipads_2.jpeg';

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
        <h2 className={styles.link}>
          <Link to='/store' className={styles.Link}>
            Shop {'>'}
          </Link>
        </h2>
        <ul className={styles.productImages}>
          <li className={styles.item1}>
            <img src={ipads} alt='iPads' />
          </li>
          <li className={styles.item2}>
            <img src={macbooks} alt='MacBooks' />
          </li>
          <li className={styles.item3}>
            <img src={ipads_2} alt='iPad Air' />
          </li>
        </ul>
      </section>
      {/* Model 2 */}
      <section className={styles.model_2}>
        <h1 className={styles.title}>iPhone 13 Pro</h1>
        <h2 className={styles.subtitle}>Oh. So. Pro.</h2>
        <div className={styles.links}>
          <p className={styles.link}>
            <Link to='/iphone' className={styles.Link}>
              Learn more {'>'}
            </Link>
          </p>
          <p className={styles.link}>
            <Link to='/store' className={styles.Link}>
              Buy {'>'}
            </Link>
          </p>
        </div>
      </section>
      {/* Model 3 */}
      <section className={styles.model_3}>
        <h1 className={styles.model_3_title}>
          <span>
            <i class='fab fa-apple'></i>Card
          </span>
        </h1>
        <h2 className={styles.model_3_subtitle}>
          Save 5% on Apple products with a new Apple Card through January 31.
        </h2>
        <h3 className={styles.model_3_terms}>
          Only at Apple. Exclusions and terms apply.<sup>1</sup>
        </h3>
        <div className={styles.model_3_links}>
          <p className={styles.link}>
            <Link to='/services' className={styles.Link}>
              Learn more {'>'}
            </Link>
          </p>
          <p className={styles.link}>
            <Link to='/support' className={styles.Link}>
              Apply Now {'>'}
            </Link>
          </p>
        </div>
      </section>
      <section className={styles.tiles}>
        {/* Tile 1 */}
        <section className={styles.tile_1}>
          <h1 className={styles.tile_1_title}>iPhone 13</h1>
          <h2 className={styles.tile_1_subtitle}>Your new superpower.</h2>
          <div className={styles.tile_1_links}>
            <p className={styles.link}>
              <Link to='/iphone' className={styles.Link}>
                Learn more {'>'}
              </Link>
            </p>
            <p className={styles.link}>
              <Link to='/store' className={styles.Link}>
                Buy {'>'}
              </Link>
            </p>
          </div>
        </section>
        {/* Tile 2 */}
        <section className={styles.tile_2}>
          <h1 className={styles.tile_2_title}>MacBook Pro</h1>
          <h2 className={styles.tile_2_subtitle}>Supercharged for pros.</h2>
          <div className={styles.tile_2_links}>
            <p className={styles.link}>
              <Link to='/mac' className={styles.Link}>
                Learn more {'>'}
              </Link>
            </p>
            <p className={styles.link}>
              <Link to='/store' className={styles.Link}>
                Buy {'>'}
              </Link>
            </p>
          </div>
        </section>
        {/* Tile 3 */}
        <section className={styles.tile_3}>
          <p className={styles.tile_3_p}>New</p>
          <h1 className={styles.tile_3_title}>
            <span>
              <i class='fab fa-apple'></i>WATCH
            </span>
          </h1>
          <h2 className={styles.tile_3_subtitle}>SERIES 7</h2>
          <h3 className={styles.tile_3_description}>
            Introducing our largest display yet.
          </h3>
          <div className={styles.tile_3_links}>
            <p className={styles.link}>
              <Link to='/watch' className={styles.Link}>
                Learn more {'>'}
              </Link>
            </p>
            <p className={styles.link}>
              <Link to='/store' className={styles.Link}>
                Buy {'>'}
              </Link>
            </p>
          </div>
        </section>
        {/* Tile 4 */}
        <section className={styles.tile_4}>
          <h1 className={styles.tile_4_title}>HomePod mini</h1>
          <div className={styles.tile_4_links}>
            <p className={styles.link}>
              <Link to='/airpods' className={styles.Link}>
                Learn more {'>'}
              </Link>
            </p>
            <p className={styles.link}>
              <Link to='/store' className={styles.Link}>
                Buy {'>'}
              </Link>
            </p>
          </div>
        </section>
        {/* Tile 5 */}
        <section className={styles.tile_5}>
          <h1 className={styles.tile_5_title}>AirPods</h1>
          <h3 className={styles.tile_5_description}>
            All-new with Spatial Audio
          </h3>
          <div className={styles.tile_5_links}>
            <p className={styles.link}>
              <Link to='/airpods' className={styles.Link}>
                Learn more {'>'}
              </Link>
            </p>
            <p className={styles.link}>
              <Link to='/store' className={styles.Link}>
                Buy {'>'}
              </Link>
            </p>
          </div>
        </section>
        {/* Tile 6 */}
        <section className={styles.tile_6}>
          <h1 className={styles.tile_6_title}>
            <span>
              <i class='fab fa-apple'></i>tv+
            </span>
          </h1>
          <div className={styles.tile_6_links}>
            <p className={styles.tile_6_link}>
              <Link to='/tv-home' className={styles.Link_tv}>
                Stream now <i class='fas fa-play-circle'></i>
              </Link>
            </p>
          </div>
        </section>
      </section>
      {/* DISCLAIMER */}
      <section className={styles.disclaimer}>
        <section className={styles.text}>
          <p className={styles.para}>
            1.{' '}
            <span className={styles.lightgray}>
              The following purchases with Apple Card are ineligible to earn 5%
              back: monthly financing through Apple Card Monthly Installments,
              Apple iPhone Payments, the iPhone Upgrade Program, and wireless
              carrier financing plans;{' '}
              <span className={styles.textLink}>Apple Media Services</span>;
              AppleCare+ monthly payments.
            </span>{' '}
            Subject to credit approval. Valid only on qualifying purchases in
            U.S. for new Apple Card customers who open an account and use it
            from 12/26/21 to 1/31/22 at Apple Store locations,{' '}
            <span className={styles.textLink}>apple.com</span>, the Apple Store
            App, or by calling 1-800-MY-APPLE. Accounts opened before 12/26/21
            or after 1/31/22 do not qualify. New Apple Card users added to an
            Apple Card Family account opened during offer period can earn 5%
            back on their own purchases. Not valid for existing Apple Card users
            who merge their Apple Card accounts to become Co-Owners. 5% is total
            amount of Daily Cash that can be earned for qualifying Apple
            purchases using Apple Card. Returning qualified items that were
            purchased during offer period may impact your cash back. 5% savings
            is earned as Daily Cash and transferred to your Apple Cash card when
            transactions post to your Apple Card account. If you do not have an
            Apple Cash card, Daily Cash can be applied by you as a credit on
            your statement balance. See the{' '}
            <span className={styles.textLink}>
              Apple Card Customer Agreement
            </span>{' '}
            for more details on Daily Cash and qualifying transactions. Changes
            to your account status during offer period may delay the fulfillment
            of your Daily Cash bonus.
          </p>
          <p className={styles.para}>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {'>'}{' '}
            General {'>'} Software Update. Tap Download and Install.
          </p>
          <p className={styles.para}>
            Available for qualifying applicants in the United States.
          </p>
          <p className={styles.para}>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </p>
          <p className={styles.para}>
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <span className={styles.textLink}>terms</span> apply.
          </p>
        </section>
        {/* LINKS */}
        <section className={styles.lists}>
          <ul>
            Shop and Learn
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>iPod touch</li>
            <li>AirTag</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
          <ul>
            Services
            <li>Apple Music</li>
            <li>Apple TV+</li>
            <li>Apple Fitness+</li>
            <li>Apple News+</li>
            <li>Apple Arcade</li>
            <li>iCloud</li>
            <li>Apple One</li>
            <li>Apple Card</li>
            <li>Apple Books</li>
            <li>Apple Podcasts</li>
            <li>App Store</li>
          </ul>
          <ul>
            Account
            <li>Manage Your Apple ID</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
          <ul>
            Apple Store
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Today at Apple</li>
            <li>Apple Camp</li>
            <li>Apple Store App</li>
            <li>Refurbished and Clearance</li>
            <li>Financing</li>
            <li>Apple Trade In</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
          <ul>
            For Business
            <li>Apple and Business</li>
            <li>Shop for Business</li>
          </ul>
          <ul>
            For Education
            <li>Apple and Education</li>
            <li>Shop for K-12</li>
            <li>Shop for College</li>
          </ul>
          <ul>
            For Healthcare
            <li>Apple in Healthcare</li>
            <li>Health on Apple Watch</li>
            <li>Health Records on iPhone</li>
          </ul>
          <ul>
            For Government
            <li>Shop for Government</li>
            <li>Shop for Veterans and Military</li>
          </ul>
          <ul>
            Apple Values
            <li>Accessibility</li>
            <li>Education</li>
            <li>Environment</li>
            <li>Inclusion and Diversity</li>
            <li>Privacy</li>
            <li>Racial Equity and Justice</li>
            <li>Supplier Responsibility</li>
          </ul>
          <ul>
            About Apple
            <li>Newsroom</li>
            <li>Apple Leadership</li>
            <li>Career Opportunities</li>
            <li>Investors</li>
            <li>Ethics & Compliance</li>
            <li>Events</li>
            <li>Contact Apple</li>
          </ul>
        </section>
        <p className={styles.moreWays}>
          More ways to shop:{' '}
          <span className={styles.moreWays_link}>Find an Apple Store</span> or{' '}
          <span className={styles.moreWays_link}>other retailer</span> near you.
          Or call 1-800-MY-APPLE.
        </p>
        <footer className={styles.footer}>
          <span className={styles.copy}>
            Copyright &copy; 2021 Apple Inc. All rights reserved.
          </span>
          <ul>
            <li>Privacy Policy</li>
            <hr></hr>
            <li>Terms of Use</li>
            <hr></hr>
            <li>Sales and Refunds</li>
            <hr></hr>
            <li>Legal</li>
            <hr></hr>
            <li>Site Map</li>
          </ul>
          <span className={styles.united}>United States</span>
        </footer>
      </section>
    </>
  );
}

export default Models;
