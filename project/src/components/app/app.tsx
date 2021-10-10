import MainScreen from '../main-screen/main-screen';

type PromoFilmProps = {
  title: string,
  genre: string,
  year: number,
}

function App({title, genre, year}: PromoFilmProps): JSX.Element {
  return (
    <MainScreen
      title = {title}
      genre = {genre}
      year = {year}
    />
  );
}

export default App;
