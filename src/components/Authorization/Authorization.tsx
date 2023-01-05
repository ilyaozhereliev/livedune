import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { facebook, google } from '../../assets/icons';
import { useAppSelector } from '../../redux/hooks';
import { Header } from '../Header';
import styles from './Authorization.module.scss';

export const Authorization = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorInformation, setErrorInformation] = useState('');

  const userData = useAppSelector((state) => state.user.users[0]);
  const form = error ? styles.form__warning : styles.form;
  const navigate = useNavigate();
  const question = 'У вас нет аккаунта?';
  const actionButton = 'Регистрация';

  const navigateClick = () => {
    navigate('./registration');
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorInformation('Введите email, Введите пароль');
      setError(true);
    } else if (email !== userData.email || password !== userData.password) {
      setErrorInformation('Неверный email или пароль');
      setError(true);
    } else {
      // eslint-disable-next-line no-alert
      alert('Вход выполнен');
      setError(false);
    }
  };

  return (
    <>
      <Header
        question={question}
        actionButton={actionButton}
        navigateClick={navigateClick}
      />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>Войти</div>
          <div className={styles.description}>
            Добро пожаловать, рады видеть вас снова 👋
          </div>

          <div className={styles.social__buttons}>
            <button className={styles.social__button} type="button">
              <img src={facebook} alt="facebook" />
              <p>Войти через Facebook</p>
            </button>
            <button className={styles.social__button} type="button">
              <img src={google} alt="google" />
              <p>Войти через Google</p>
            </button>
          </div>

          <div className={styles.separator}>или</div>

          <form className={styles.forms} onSubmit={handleClick}>
            <div className={form}>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={form}>
              <input
                type="password"
                value={password}
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className={styles.alert}>{errorInformation}</div>}
            <button className={styles.submit__button} type="submit">
              Войти в аккаунт
            </button>
          </form>

          <button
            className={styles.helper__button}
            type="button"
            onClick={() => {
              navigate('/passwordRetrieval');
            }}
          >
            Забыли пароль?
          </button>
        </div>
      </div>
    </>
  );
};
