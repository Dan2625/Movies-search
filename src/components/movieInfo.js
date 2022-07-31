import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieInfo(props) {
  let movId = props.match.params.id;
  let [item, setItem] = useState({});

  useEffect(() => {
    doApiInfo();
  }, []);

  const doApiInfo = async () => {
    let id = props.match.params.id;
    let url = `https://omdbapi.com/?i=${id}&apikey=cabb9941`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setItem(resp.data);
  };
  return (
    <div className="container">
      <div className="col-lg-6 shadow p-3 mx-auto overflow-hidden">
        <img src={item.Poster} className="w-25 float-start me-2" />
        <h2>{item.Title}</h2>
        <div>Score: {item.imdbRating}</div>
        <div>Votes count: {item.imdbVotes}</div>
        <div>Year: {item.Year}</div>
        <Link to="/" className="btn btn-dark mt-5">
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default MovieInfo;
