import React, { Component } from "react";
import Card from "../components/Card/Card";
import Axios from "axios";

class Home extends Component {
  state = {
    employees: [],
    value: "",
  };

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=50")
      .then((data) => {
        this.setState({ employees: data.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleOnChange = (event) => {
    this.setState({ value: event.target.value });
    this.handleSearch();
  };

  handleSearch = () => {
    const filtered = this.state.employees.filter((emp) =>
      emp.name.last.includes(this.state.value)
    );
    this.setState({ employees: filtered });
  };
  handleClear = () => {
    this.setState({ value: "" });
    Axios.get("https://randomuser.me/api/?results=50")
      .then((data) => {
        this.setState({ employees: data.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleSort = (type) => {
    const sortedEmployees = this.state.employees.sort((a, b) => {
      if (type === "ascending") {
        return a.name.last.localeCompare(b.name.last);
      } else {
        return b.name.last.localeCompare(a.name.last);
      }
    });
    this.setState({ employees: sortedEmployees });
  };

  render() {
    return (
      <div className="container bg-light">
        <div className="col-12 bg-dark text-white" id="title">
          <h1 className="text-center">Employee Tracker</h1>
        </div>
        <div className="row bg-light">
          <div className="col-l">
            <div className="row"></div>
            <h5>Sort by Last Name</h5>
            <button
              className="btn btn-info my-2 my-sm-0"
              onClick={() => this.handleSort("ascending")}
            >
              Ascending
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.handleSort("descending")}
            >
              Descending
            </button>
          </div>
          <div className="col text-center">
            <br></br>
          </div>
          <div className="col-l">
            <h5>Search by Last Name</h5>
            <input
              className="input-group"
              value={this.state.value}
              onChange={this.handleOnChange}
              type="text"
              placeholder="Last Name"
            />
            <button onClick={() => this.handleClear()}>Clear</button>
          </div>
        </div>
        <div className="row"></div>

        <div className="row">
          {this.state.employees.map((employee) => (
            <Card
              key={employee.login.uuid}
              image={employee.picture.medium}
              id={employee.id.value}
              firstName={employee.name.first}
              lastName={employee.name.last}
              city={employee.location.city}
              country={employee.location.country}
              email={employee.email}
              phone={employee.phone}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
