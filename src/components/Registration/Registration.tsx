import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { facebook, google } from '../../assets/icons';
import { useAppDispatch } from '../../redux/hooks';
import { addUser } from '../../redux/usersSlice';
import { baseName } from '../../utils';
import { Header } from '../Header';
import styles from './Registration.module.scss';

export const Registration = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [promocode, setPromocode] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [errorInformation, setErrorInformation] = useState('');

  const form = error ? styles.form : styles.form;
  const question = 'Уже есть аккаунт?';
  const actionButton = 'Войти';
  const navigate = useNavigate();
  // eslint-disable-next-line operator-linebreak
  const validEmail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,3})$/iu;
  const navigateClick = () => {
    navigate(`/${baseName}`);
  };

  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validEmail.test(email)) {
      setErrorInformation('Возможно вы ошиблись в указании почтового сервиса');
      setError(true);
    } else {
      dispatch(addUser({ name, email, password }));
      navigate(`/${baseName}confirmEmail`);
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
          <div className={styles.header}>Регистрация</div>
          <div className={styles.description}>
            Зарегистрируйся и получи доступ к аналитике аккаунтов.
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

          <form className={styles.forms}>
            <div className={form}>
              <input
                type="text"
                value={name}
                placeholder="Имя"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={form}>
              <input
                type="email"
                value={email}
                placeholder="Email"
                className={error ? styles.error : ''}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <div className={styles.alert}>{errorInformation}</div>}
            <div className={form}>
              <input
                type="password"
                value={password}
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isFormVisible ? (
              <div className={form}>
                <input
                  type="text"
                  value={promocode}
                  placeholder="Промокод"
                  onChange={(e) => setPromocode(e.target.value)}
                />
              </div>
            ) : (
              <button
                className={styles.promocode}
                type="button"
                onClick={() => setIsFormVisible(true)}
              >
                У меня есть промокод
              </button>
            )}
          </form>
          <button
            className={styles.submit__button}
            type="button"
            onClick={handleClick}
          >
            Создать аккаунт
          </button>
          <div className={styles.helper__text}>
            Создавая аккаунт, я согласен {}
            <button className={styles.helper__button} type="button">
              с условиями оферты
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
