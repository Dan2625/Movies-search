import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { sortBy } from 'lodash';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MoviesInput from './moviesInput';
import MoviesList from './moviesList';
import MovieInfo from './movieInfo';

function AppMovies() {
  let [search, setSearch] = useState('white');
  let [ar, setAr] = useState([]);
  let [sortSelect, setSortSelect] = useState('Title');

  useEffect(() => {
    doSearchApi();
  }, [search]);

  const sortMovies = (_sort) => {
    let temp_ar = sortBy(ar, _sort);
    setAr(temp_ar);
    setSortSelect(_sort);
  };

  const doSearchApi = async () => {
    let url = `https://omdbapi.com/?s=${search}&apikey=cabb9941`;
    /*  let resp = await fetch(url);
    let data = await resp.json(); */
    let resp = await axios.get(url);
    console.log(resp.data);
    let temp_ar = sortBy(resp.data.Search, sortSelect);
    setAr(temp_ar);
  };

  return (
    <Router>
      <MoviesInput sortMovies={sortMovies} setSearch={setSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <MoviesList movies_ar={ar} />
            </div>
          )}
        />
        <Route exact path="/info/:id" component={MovieInfo} />
      </Switch>
    </Router>
  );
}

export default AppMovies;
