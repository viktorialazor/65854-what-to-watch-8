import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import browserHistory from '../../browser-history';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {FilmDataType} from '../../types/films';
import {AUTHORIZATION_STATUS, APP_ROUTE, TAB_LIST, emptyFilm} from '../../const';
import {isCheckedAuth} from '../../utils/common';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';

const mapStateToProps = ({authorizationStatus, isDataLoaded, films}: State) => ({
  films,
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {films, authorizationStatus, isDataLoaded} = props;
  const [activeClickFilm, setActiveClickFilm] = useState(emptyFilm);
  const [activeTab, setActiveTab] = useState(TAB_LIST[0]);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const handleClick = (newActiveClickFilm: FilmDataType) => {
    setActiveClickFilm(newActiveClickFilm);
    setActiveTab(TAB_LIST[0]);
  };

  const getActiveTab = (tab: string): void => {
    setActiveTab(tab);
  };

  const getLink = (): JSX.Element => {
    if (authorizationStatus === AUTHORIZATION_STATUS.AUTH) {
      return <MainScreen handleClick = {handleClick} />;
    }
    return <SignIn />;
  };

  const link = getLink();

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={APP_ROUTE.MAIN}>
          <MainScreen
            handleClick = {handleClick}
          />
        </Route>
        <Route exact path={APP_ROUTE.SIGN_IN}>
          {link}
        </Route>
        <PrivateRoute
          exact
          path={APP_ROUTE.MY_LIST}
          render={() => <MyList handleClick={handleClick} />}
        >
        </PrivateRoute>
        <Route exact path={APP_ROUTE.FILM}>
          <MoviePage
            tabList={TAB_LIST}
            activeTab={activeTab}
            getActiveTab={getActiveTab}
            id={activeClickFilm.id}
            handleClick = {handleClick}
          />
        </Route>
        <PrivateRoute
          exact
          path={APP_ROUTE.ADD_REVIEW}
          render={({history}) => <AddReview onBackToMovie={() => history.push(`/films/${activeClickFilm.id}`)}/>}
        >
        </PrivateRoute>
        <Route exact path={APP_ROUTE.PLAYER}>
          <Player film={films[0]}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
