import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import {FilmDataType} from '../../types/films';
import {APP_ROUTE, AUTHORIZATION_STATUS, TAB_LIST} from '../../const';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  films: FilmDataType[];
}

function App({films}: AppProps): JSX.Element {
  const [activeClickFilm, setActiveClickFilm] = useState(films[0]);
  const [activeTab, setActiveTab] = useState(TAB_LIST[0]);

  const handleClick = (newActiveClickFilm: FilmDataType) => {
    setActiveClickFilm(newActiveClickFilm);
    setActiveTab(TAB_LIST[0]);
  };

  const getActiveTab = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={APP_ROUTE.MAIN}>
          <MainScreen
            films = {films}
            handleClick = {handleClick}
          />
        </Route>
        <Route exact path={APP_ROUTE.SIGN_IN}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={APP_ROUTE.MY_LIST}
          render={() => <MyList films = {films} handleClick={handleClick} />}
          authorizationStatus={AUTHORIZATION_STATUS.NO_AUTH}
        >
        </PrivateRoute>
        <Route exact path={APP_ROUTE.FILM}>
          <MoviePage
            tabList={TAB_LIST}
            activeTab={activeTab}
            getActiveTab={getActiveTab}
            films={films}
            film={activeClickFilm}
            handleClick = {handleClick}
          />
        </Route>
        <Route exact path={APP_ROUTE.ADD_REVIEW}>
          <AddReview film={films[0]}/>
        </Route>
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

export default App;
