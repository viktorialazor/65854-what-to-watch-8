import React from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {AUTHORIZATION_STATUS} from '../../const';
import SignOutButton from '../sign-out-button/sign-out-button';
import SignInButton from '../sign-in-button/sign-in-button';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignInOut({authorizationStatus}: PropsFromRedux): JSX.Element {
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

export {SignInOut};
export default connector(SignInOut);
