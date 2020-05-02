import React from 'react';
import Axios from 'axios';

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
    console.log(isLoading, movies);
    return (
      <div></div>
    );
  }
}

export default App;
