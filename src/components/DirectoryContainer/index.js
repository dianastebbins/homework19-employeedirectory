import React, { Component } from "react";
import Table from "../Table";
import API from "../../utils/API";

class DirectoryContainer extends Component {
    state = {
        employeeList: []
    }

    // called once, when component loads
    componentDidMount() {
        this.initializeEmployees("bananas"); // send a seed so we get back the same list
    }

    initializeEmployees = seed => {
        API.initialize(seed)
            .then(res => {
                this.setState({ employeeList: res.data.results});
                // console.log(this.state.employeeList);
            })
            .catch(err => console.log(err)) // TODO: make a bar that is visible/invisible with opacity setting
    }

    // don't know that we need this yet, but it's "boilerplate"
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // do something(s)...
    }

    sortBy = (sortField, ascOrDesc) => {
        console.log(sortField)
        let tempArr = this.state.employeeList;
        if(sortField === "first"){
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.name.first > b.name.first) ? 1 : -1 : (a.name.first < b.name.first) ? 1 : -1);
        } else if(sortField === "last"){
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.name.last > b.name.last) ? 1 : -1 : (a.name.last < b.name.last) ? 1 : -1);
        } else if(sortField === "cell"){
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.cell > b.cell) ? 1 : -1 : (a.cell < b.cell) ? 1 : -1);
        } else {
            // sortField === "email"
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.email > b.email) ? 1 : -1 : (a.email < b.email) ? 1 : -1);
        }
        this.setState({ employeeList: tempArr});
    }

    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <Table employeeList={this.state.employeeList} sortBy={this.sortBy} />
            </div>
        )
    }
}

export default DirectoryContainer;