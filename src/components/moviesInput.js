import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

function MoviesInput(props) {
  let inputRef = useRef();
  let sortRef = useRef();
  let history = useHistory();

  return (
    <div className="container-fluid bg-info p-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2>Movies search</h2>
          </div>
          <div className="col-lg-8 d-flex align-items-center justify-content-end">
            <input
              ref={inputRef}
              placeholder="searc.."
              type="search"
              className="form-control w-25"
            />
            <button
              onClick={() => {
                history.push('/');
                props.setSearch(inputRef.current.value);
              }}
              className="btn btn-dark"
            >
              Search
            </button>
            <div className="mx-2">Sort:</div>
            <select
              onChange={() => {
                props.sortMovies(sortRef.current.value);
              }}
              ref={sortRef}
              className="form-select w-25"
            >
              <option value="Title">Name</option>
              <option value="Year">Year</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesInput;
