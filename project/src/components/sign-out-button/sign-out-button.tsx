import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/api-actions';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickSignOut() {
    dispatch(logoutAction());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignOutButton(props: PropsFromRedux): JSX.Element {
  const {onClickSignOut} = props;

  return <Link onClick={(evt) => {evt.preventDefault(); onClickSignOut();}} className="user-block__link" to='/'>Sign out</Link>;
}

export {SignOutButton};
export default connector(SignOutButton);
