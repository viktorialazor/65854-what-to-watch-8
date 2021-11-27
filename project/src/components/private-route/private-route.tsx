import {Route, Redirect, RouteProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {History} from 'history';
import {APP_ROUTE, AUTHORIZATION_STATUS} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authorizationStatus === AUTHORIZATION_STATUS.AUTH
          ? render(routeProps)
          : <Redirect to={APP_ROUTE.SIGN_IN} />
      )}
    />
  );
}

export default PrivateRoute;
