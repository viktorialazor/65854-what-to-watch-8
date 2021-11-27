import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AUTHORIZATION_STATUS} from '../../const';
import SignOutButton from '../sign-out-button/sign-out-button';
import SignInButton from '../sign-in-button/sign-in-button';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function SignInOut(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const getSignButton = (): JSX.Element => {
    if (authorizationStatus === AUTHORIZATION_STATUS.AUTH) {
      return (<SignOutButton />);
    }

    return (<SignInButton />);
  };

  const signButton = getSignButton();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to='/mylist' className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </li>
      <li className="user-block__item">
        {signButton}
      </li>
    </ul>);
}

export default SignInOut;
