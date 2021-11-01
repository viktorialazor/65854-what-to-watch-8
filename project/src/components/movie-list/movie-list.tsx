import React from 'react';
import {FilmDataType} from '../../types/films';
import FilmCard from '../film-card/film-card';

type MovieListProps = {
  films: FilmDataType[];
  handleClick: (newActiveClickFilm: FilmDataType) => void;
  handleHover: ((newActiveFilm: FilmDataType) => void) | null;
};

function MovieList({films, handleClick, handleHover}: MovieListProps): JSX.Element {
  return (
    <React.Fragment>
      {
        films.map((item) => <FilmCard key={item.id} film={item} handleClick={handleClick} handleHover={handleHover}/>)
      }
    </React.Fragment>
  );
}

export default MovieList;
