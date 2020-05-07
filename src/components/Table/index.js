import React from "react";
import "./style.css";

function Table(props) {
    // TODO: striped is not working
    // maybe add onto thead: className="thead-dark"
    return (
        <table id="dataTable" className="table table-bordered table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First <img alt="sort up" src="https://img.icons8.com/android/24/000000/sort-up.png" onClick={() => props.sortBy("first","asc")} /> <img alt="sort down" src="https://img.icons8.com/android/24/000000/sort-down.png" onClick={() => props.sortBy("first","desc")} /></th>
                    <th scope="col">Last <img alt="sort up" src="https://img.icons8.com/android/24/000000/sort-up.png" onClick={() => props.sortBy("last","asc")} /> <img alt="sort down" src="https://img.icons8.com/android/24/000000/sort-down.png" onClick={() => props.sortBy("last","desc")} /></th>
                    <th scope="col">Cell  <img alt="sort up" src="https://img.icons8.com/android/24/000000/sort-up.png" onClick={() => props.sortBy("cell","asc")} /> <img alt="sort down" src="https://img.icons8.com/android/24/000000/sort-down.png" onClick={() => props.sortBy("cell","desc")} /></th>
                    <th scope="col">Email  <img alt="sort up" src="https://img.icons8.com/android/24/000000/sort-up.png" onClick={() => props.sortBy("email","asc")} /> <img alt="sort down" src="https://img.icons8.com/android/24/000000/sort-down.png" onClick={() => props.sortBy("email","desc")} /></th>
                </tr>
            </thead>
            <tbody>
                {props.employeeList.map(employee =>
                    <tr key={employee.cell}>
                        <td><img alt={employee.name.last} src={employee.picture.thumbnail} className="img-fluid" /></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.cell}</td>
                        <td>{employee.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;