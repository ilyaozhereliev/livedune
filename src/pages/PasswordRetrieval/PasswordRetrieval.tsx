import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { lock, logo, spinner } from '../../assets/icons';
import { useAppSelector } from '../../redux/hooks';
import { baseName } from '../../utils';
import styles from './PasswordRetrieval.module.scss';

export const PasswordRetrieval = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorInformation, setErrorInformation] = useState('');
  const [isSending, setIsSending] = useState(false);

  const userData = useAppSelector((state) => state.user.users[0]);
  const navigate = useNavigate();
  const form = error ? styles.form__warning : styles.form;

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '') {
      setErrorInformation('Введите email');
      setError(true);
    } else if (email !== userData.email) {
      setErrorInformation('Указанного email не существует');
      setError(true);
    } else {
      setIsSending(true);
      setError(false);
      setTimeout(() => {
        navigate(`/${baseName}/successfully`);
        setIsSending(false);
      }, 1500);
    }
  };

  return (
    <>
      <header>
        <img className={styles.logo} src={logo} alt="logo" />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.lock__logo} src={lock} alt="lock" />
          <div className={styles.header}>Восстановить пароль</div>
          <div className={styles.description}>
            Введите e-mail, на который регистрировались ранее
          </div>

          <form className={styles.forms} onSubmit={handleClick}>
            <div className={isSending ? styles.form__disable : form}>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <div className={styles.alert}>{errorInformation}</div>}

            <button className={styles.submit__button} type="submit">
              {isSending && (
                <img className={styles.spinner} src={spinner} alt="spinner" />
              )}
              Отправить
            </button>
          </form>

          <button
            className={styles.helper__button}
            type="button"
            onClick={() => {
              navigate(`/${baseName}/registration`);
            }}
          >
            Отменить
          </button>
        </div>
      </div>
    </>
  );
};
