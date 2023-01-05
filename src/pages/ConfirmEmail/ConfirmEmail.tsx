import React from 'react';
import { useNavigate } from 'react-router';

import { logo } from '../../assets/icons';
import { useAppSelector } from '../../redux/hooks';
import { baseName } from '../../utils';
import styles from './ConfirmEmail.module.scss';

export const ConfirmEmail = () => {
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.user.users);
  const { name } = users[users.length - 1];

  return (
    <>
      <header>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.header__section}>
          <button
            className={styles.button}
            onClick={() => {
              navigate(`/${baseName}/registration`);
            }}
            type="button"
          >
            Выйти
          </button>
        </div>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>Подтвердите ваш e-mail</div>
          <div className={styles.description}>
            {name}, на ваш E-mail отправлено письмо со ссылкой для
            подтверждения. Перейдите по ней, чтобы активировать вашу учетную
            запись и получить 7 дней бесплатного доступа.
          </div>

          <button
            className={styles.submit__button}
            type="button"
            // onClick={handleClick}
          >
            Перейти к почте
          </button>

          <button
            className={styles.helper__button}
            type="button"
            onClick={() => {
              navigate(`/${baseName}/NoLetter`);
            }}
          >
            Мне не пришло письмо
          </button>
        </div>
      </div>
    </>
  );
};
