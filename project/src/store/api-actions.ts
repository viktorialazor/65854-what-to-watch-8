import {ThunkActionResult, genreListPayload} from '../types/action';
import {toast} from 'react-toastify';
import {AuthData} from '../types/auth-data';
import {AddComment, setFormLockType, FilmDataType, FilmReviewType} from '../types/films';
import {APIRoute, AUTHORIZATION_STATUS, ACTIVE_GENRE, APP_ROUTE} from '../const';
import {adaptFilmToClient} from '../utils/adapter';
import {saveToken, dropToken, Token} from '../services/token';
import {changeActiveGenre, loadFilms, loadFavoriteFilms, changeFavoriteFilm, loadSimilarFilms, loadFilm, loadPromoFilm, loadComments, requireAuthorization, requireLogout, redirectToRoute} from './action';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmDataType[]>(APIRoute.Films);
    const films: FilmDataType[] = [];
    data.forEach((item) => films.push(adaptFilmToClient(item)));
    const defaultGenreFiltered: genreListPayload = {
      filmList: films,
      genre: ACTIVE_GENRE,
    };
    dispatch(loadFilms(films));
    dispatch(changeActiveGenre(defaultGenreFiltered));
  };

export const fetchFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmDataType[]>('/favorite');
    const films: FilmDataType[] = [];
    data.forEach((item) => films.push(adaptFilmToClient(item)));
    dispatch(loadFavoriteFilms(films));
  };

export const changeFavoriteFilmStatus = (filmId: number, status: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post<FilmDataType>(`/favorite/${filmId}/${status ? 1 : 0}`);
      dispatch(changeFavoriteFilm({filmId, status}));
    } catch {
      toast.error('При обновлении статуса фильма произошла ошибка.');
    }
  };

export const fetchFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmDataType>(`/films/${id}`);
    dispatch(loadFilm(data));
  };

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmDataType>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  };

export const fetchCommentsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmReviewType[]>(`/comments/${id}`);
    dispatch(loadComments(data));
  };

export const addCommentAction = (id: number, addComment: AddComment, setFormLock: setFormLockType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      await api.post<AddComment>(`/comments/${id}`, addComment);
      setFormLock(true);
      toast.info('Отзыв был успешно добавлен');
    } catch {
      toast.error('При отправке отзыва произошла ошибка.');
      setFormLock(false);
    }
  };

export const fetchSimilarFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmDataType[]>(`/films/${id}/similar`);
    dispatch(loadSimilarFilms(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AUTHORIZATION_STATUS.AUTH));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AUTHORIZATION_STATUS.AUTH));
    dispatch(redirectToRoute(APP_ROUTE.MAIN));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout(AUTHORIZATION_STATUS.NO_AUTH));
  };
