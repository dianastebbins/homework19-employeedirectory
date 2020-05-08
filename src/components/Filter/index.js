import React from "react";

function Filter(props) {
    return (
        // <form>
        //   <div className="form-group">
        //     <label htmlFor="filter">Filter:</label>
        //     <input
        //       onChange={props.handleInputChange}
        //       value={props.filter}
        //       name="filter"
        //       type="text"
        //       className="form-control"
        //       placeholder="Filter by first name, 'enter' to clear filter"
        //       id="filter"
        //     />
        //   </div>
        // </form>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <select name="filterBy" onChange={props.handleFilterByChange} className="custom-select" id="inputGroupSelect01">
                    <option value="none">Filter by...</option>
                    <option value="first">First Name</option>
                    <option value="last">Last Name</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                    <option value="cell">Cell</option>
                    <option value="email">Email</option>
                    <option value="clear">Clear Filter</option>
                </select>
            </div>
            <input
                id="filter"
                name="filter"
                type="text"
                value={props.filter}
                onChange={props.handleFilterChange}
                className="form-control"
                aria-label="Filter by first name, 'enter' to clear filter"
            />
        </div>

    );
}

export default Filter;