import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../store/api-actions';

function SignOutButton(): JSX.Element {

  const dispatch = useDispatch();

  const onClickSignOut = () => {
    dispatch(logoutAction());
  };

  return <Link onClick={(evt) => {evt.preventDefault(); onClickSignOut();}} className="user-block__link" to='/'>Sign out</Link>;
}

export default SignOutButton;
