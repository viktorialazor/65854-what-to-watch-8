import {Link} from 'react-router-dom';

function SignInButton(): JSX.Element {

  return <Link className="user-block__link" to='/login'>Sign in</Link>;
}

export default SignInButton;
