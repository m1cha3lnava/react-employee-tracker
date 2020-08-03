import React, { Component } from "react";
import Card from "../components/Card/Card";
import Axios from "axios";

class Home extends Component {
  state = {
    searchValue: "",
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
    console.log(this.state.value);
    this.handleSearch();
  };

  handleSearch = () => {
    const filtered = this.state.employees.filter((emp) =>
      emp.name.first.includes(this.state.value)
    );
    this.setState({ employees: filtered });
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
      <div className="container">
        <input
          value={this.state.value}
          onChange={this.handleOnChange}
          type="text"
          placeholder="First Name"
        />
        <button
          className="btn btn-info"
          onClick={() => this.handleSort("ascending")}
        >
          Sort Ascending by last name
        </button>
        <button
          className="btn btn-info"
          onClick={() => this.handleSort("descending")}
        >
          Sort Descending by last name
        </button>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">This is my homepage</h1>
          </div>

          {this.state.employees.map((employee) => (
            <Card
              key={employee.login.uuid}
              image={employee.picture.medium}
              id={employee.id.value}
              firstName={employee.name.first}
              lastName={employee.name.last}
              location={employee.location.city}
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
