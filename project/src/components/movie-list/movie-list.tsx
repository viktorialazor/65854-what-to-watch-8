import React from 'react';
import {FilmDataType} from '../../types/films';
import FilmCard from '../film-card/film-card';

type MovieListProps = {
  films: FilmDataType[];
  handleClick: (newActiveClickFilm: FilmDataType) => void;
  handleHover: ((newActiveFilm: FilmDataType) => void) | null;
  hasVideoPreview?: boolean;
};

function MovieList({films, handleClick, handleHover, hasVideoPreview = false}: MovieListProps): JSX.Element {
  return (
    <React.Fragment>
      {
        films.map((item) => <FilmCard key={item.id} film={item} handleClick={handleClick} handleHover={handleHover} hasVideoPreview={hasVideoPreview}/>)
      }
    </React.Fragment>
  );
}

export default MovieList;
