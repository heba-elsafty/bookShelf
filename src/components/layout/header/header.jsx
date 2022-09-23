import React from 'react';
import logo from "../../../assets/images/logo.svg";
import styles from './header.module.scss';

const ComponentsLayoutHeader = () => (
  <div className={styles.ComponentsLayoutHeader}>
    <img src={logo} alt="bookshlef-logo" className={styles.ComponentsLayoutHeader__logo} />
    <p>bookshelf</p>
  </div>
);

export default ComponentsLayoutHeader;
