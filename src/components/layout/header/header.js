import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.svg";
import styles from './header.module.scss';

const ComponentsLayoutHeader = () => (
  <div className={styles.ComponentsLayoutHeader}>
    <Link to="/" className={styles.ComponentsLayoutHeader__logo}>
      <img src={logo} alt="bookshlef-logo"  />
      <p>bookshelf</p>
    </Link>
  </div>
);

export default ComponentsLayoutHeader;
