import React from "react";

function Filter(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="filter">Filter:</label>
        <input
          onChange={props.handleInputChange}
          value={props.filter}
          name="filter"
          type="text"
          className="form-control"
          placeholder="Filter employee listing"
          id="filter"
        />
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Filter
        </button> */}
      </div>
    </form>
  );
}

export default Filter;