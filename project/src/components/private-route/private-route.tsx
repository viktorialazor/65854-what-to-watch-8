import {Route, Redirect, RouteProps} from 'react-router-dom';
import {APP_ROUTE, AUTHORIZATION_STATUS} from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AUTHORIZATION_STATUS.AUTH
          ? render()
          : <Redirect to={APP_ROUTE.SIGN_IN} />
      )}
    />
  );
}

export default PrivateRoute;
