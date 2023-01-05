import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { logo } from '../../assets/icons';
import styles from './NoLetter.module.scss';

export const NoLetter = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <header>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.header__section}>
          <button
            className={styles.button}
            onClick={() => {
              navigate('/registration');
            }}
            type="button"
          >
            Выйти
          </button>
        </div>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>Мне не пришло письмо</div>
          <div className={styles.description}>
            <p>Письмо может прийти с задержкой в 5-10 минут.</p> Также проверьте
            разные папки почтового ящика (актуально для gmail.com) и папку
            &quot;Спам&quot;.Если письмо все же не пришло, повторите попытку или
            напишите об этом в тех.поддержку{' '}
            <a
              className={styles.email}
              href="mailto:support@livedune.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@livedune.ru
            </a>{' '}
            и мы активируем ваш аккаунт.
          </div>

          <form className={styles.forms}>
            <div className={styles.form}>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>

          <button className={styles.submit__button} type="button">
            Отправить заново
          </button>

          <button
            className={styles.helper__button}
            type="button"
            onClick={() => {
              navigate('/registration');
            }}
          >
            Отменить
          </button>
        </div>
      </div>
    </>
  );
};
