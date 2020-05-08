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
          placeholder="Filter by first name, 'enter' to clear filter"
          id="filter"
        />
      </div>
    </form>
  );
}

export default Filter;