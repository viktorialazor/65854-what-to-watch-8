import {Route, Redirect, RouteProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {History} from 'history';
import {State} from '../../types/state';
import {APP_ROUTE, AUTHORIZATION_STATUS} from '../../const';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
  authorizationStatus: string;
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

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

export {PrivateRoute};
export default connector(PrivateRoute);
