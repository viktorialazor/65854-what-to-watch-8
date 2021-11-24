import React, {useState} from 'react';
import {FilmDataType} from '../../types/films';
import {emptyFilm} from '../../const';
import FilmCard from '../film-card/film-card';

type MovieListProps = {
  films: FilmDataType[];
  handleClick: (newActiveClickFilm: FilmDataType) => void;
};

function MovieList({films, handleClick}: MovieListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState(emptyFilm);
  const handleHover = (newActiveFilm: FilmDataType) => {
    setActiveFilm(newActiveFilm);
  };

  return (
    <React.Fragment>
      {
        films.map((item) => <FilmCard key={item.id} film={item} handleClick={handleClick} onHoverFilmCard={handleHover} activeFilm={activeFilm}/>)
      }
    </React.Fragment>
  );
}

export default MovieList;
