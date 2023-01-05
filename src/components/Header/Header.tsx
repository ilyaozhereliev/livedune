import React, { FC } from 'react';

import { logo } from '../../assets/icons';
import styles from './Header.module.scss';

interface HeaderProps {
  question: string;
  actionButton: string;
  navigateClick: (value: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Header: FC<HeaderProps> = ({
  question,
  actionButton,
  navigateClick,
}) => (
  <header>
    <img className={styles.logo} src={logo} alt="logo" />
    <div className={styles.header__section}>
      <p className={styles.footnote}>{question}</p>
      <button className={styles.button} onClick={navigateClick} type="button">
        {actionButton}
      </button>
    </div>
  </header>
);
