import React, { Component } from "react";
import Table from "../Table";
import Filter from "../Filter";
import API from "../../utils/API";

class DirectoryContainer extends Component {
    state = {
        filter: "",
        displayList: [],
        employeeList: [],
    }

    // called once, when component loads
    componentDidMount() {
        this.initializeEmployees("bananas"); // send a seed so we always get back the same list
    }

    initializeEmployees = seed => {
        API.initialize(seed)
            .then(res => {
                // initially, both lists are the same
                this.setState({ 
                    displayList: res.data.results,
                    employeeList: res.data.results });
            })
            .catch(err => console.log(err)) // TODO: make a bar that is visible/invisible with opacity setting
    }

    handleFilterInput = event => {
        const name = event.target.name;
        const value = event.target.value;

        // first filter the list
        let filteredList = this.state.employeeList.filter(employee => employee.name.first.startsWith(value));
        
        this.setState({
            [name]: value,
            displayList: filteredList
        });
        
        console.log(this.state.displayList);
        console.log(this.state.employeeList)

    };

    // TODO: add in city and state
    sortBy = (sortField, ascOrDesc) => {
        let tempArr = this.state.displayList; //this.state.employeeList;
        if (sortField === "first") {
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.name.first > b.name.first) ? 1 : -1 : (a.name.first < b.name.first) ? 1 : -1);
        } else if (sortField === "last") {
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.name.last > b.name.last) ? 1 : -1 : (a.name.last < b.name.last) ? 1 : -1);
        } else if (sortField === "city") {
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.location.city > b.location.city) ? 1 : -1 : (a.location.city < b.location.city) ? 1 : -1);
        } else if (sortField === "state") {
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.location.state > b.location.state) ? 1 : -1 : (a.location.state < b.location.state) ? 1 : -1);
        } else if (sortField === "cell") {
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.cell > b.cell) ? 1 : -1 : (a.cell < b.cell) ? 1 : -1);
        } else {
            // sortField === "email"
            tempArr.sort((a, b) => ascOrDesc === "asc" ? (a.email > b.email) ? 1 : -1 : (a.email < b.email) ? 1 : -1);
        }
        // this.setState({ employeeList: tempArr });
        this.setState({ displayList: tempArr });
    }

    // TODO: make a fancy jumbotron header
    // TODO: search and filter
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Employee Directory</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Filter filter={this.state.filter} handleInputChange={this.handleFilterInput} />
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="row">
                    <div className="col-md-12">
                        <Table employeeList={this.state.displayList} sortBy={this.sortBy} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DirectoryContainer;