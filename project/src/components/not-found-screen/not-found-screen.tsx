import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <React.Fragment>
      <header className="page-header film-card__head">
        <Logo />

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
      <div className="page-content page-not-found">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </React.Fragment>
  );
}

export default NotFoundScreen;
