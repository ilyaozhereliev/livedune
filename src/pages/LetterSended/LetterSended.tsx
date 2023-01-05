import React from 'react';
import { useNavigate } from 'react-router';

import { letter, logo } from '../../assets/icons';
import styles from './LetterSended.module.scss';

export const LetterSended = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <img className={styles.logo} src={logo} alt="logo" />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.lock__logo} src={letter} alt="lock" />
          <div className={styles.header}>Письмо отправлено</div>
          <div className={styles.description}>
            На указанный вами e-mail было отправлено письмо для смены пароля
          </div>

          <button
            className={styles.submit__button}
            type="button"
            onClick={() => {
              navigate('/');
            }}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </>
  );
};
