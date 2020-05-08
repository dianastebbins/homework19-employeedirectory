import React from "react";
import "./style.css";

function Table(props) {
    const upArrow = "https://img.icons8.com/android/24/000000/sort-up.png";
    const downArrow = "https://img.icons8.com/android/24/000000/sort-down.png";

    // TODO: striped is not working
    // TODO: maybe add onto thead: className="thead-dark"
    // TODO: add in city and state
    return (
        <table id="dataTable" className="table table-bordered table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First <img alt="sort up" src={upArrow} onClick={() => props.sortBy("first", "asc")} /> <img alt="sort down" src={downArrow} onClick={() => props.sortBy("first", "desc")} /></th>
                    <th scope="col">Last <img alt="sort up" src={upArrow} onClick={() => props.sortBy("last", "asc")} /> <img alt="sort down" src={downArrow} onClick={() => props.sortBy("last", "desc")} /></th>
                    <th scope="col">City <img alt="sort up" src={upArrow} onClick={() => props.sortBy("city", "asc")} /> <img alt="sort down" src={downArrow} onClick={() => props.sortBy("city", "desc")} /></th>
                    <th scope="col">State <img alt="sort up" src={upArrow} onClick={() => props.sortBy("state", "asc")} /> <img alt="sort down" src={downArrow} onClick={() => props.sortBy("state", "desc")} /></th>
                    <th scope="col">Cell  <img alt="sort up" src={upArrow} onClick={() => props.sortBy("cell", "asc")} /> <img alt="sort down" src={downArrow} onClick={() => props.sortBy("cell", "desc")} /></th>
                    <th scope="col">Email  <img alt="sort up" src={upArrow} onClick={() => props.sortBy("email", "asc")} /> <img alt="sort down" src={downArrow} onClick={() => props.sortBy("email", "desc")} /></th>
                </tr>
            </thead>
            <tbody>
                {props.employeeList.map(employee =>
                    <tr key={employee.cell}>
                        <td><img alt={employee.name.last} src={employee.picture.thumbnail} className="img-fluid" /></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.location.city}</td>
                        <td>{employee.location.state}</td>
                        <td>{employee.cell}</td>
                        <td>{employee.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;