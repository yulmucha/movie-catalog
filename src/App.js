import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';


function Movie({poster, title, year, genres, summary}) {
  return (
    <div>
      <img src={poster} alt={title} title={title} />
      <div>{title}</div>
      <div>{year}</div>
      <ul>
        {genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
      </ul>
      <div>{summary}</div>
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string
};

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // componentDidMount() {
  //   console.log(`didMount`);
  //   const moviesPromise = new Promise((resolve, reject) => {
  //     const response = Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  //     resolve(response);
  //   });

  //   moviesPromise.then(response => {
  //     const { data: { data: { movies } } } = response;
  //     this.setState({ isLoading: false, movies });
  //   });
  // }

  async componentDidMount() {
    const { data: { data: { movies } } } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ isLoading: false, movies });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {
          isLoading ? "Loading..."
            : movies.map(movie =>
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
                poster={movie.medium_cover_image} />)
        }
      </div>
    );
  }
}

export default App;
