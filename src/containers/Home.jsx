import React, { Component } from "react";
import Card from "../components/Card/Card";
import Axios from "axios";

class Home extends Component {
  state = {
    searchValue: "",
    employees: [],
    value: "",
    firstName: "",
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
  };

  handleSearch = (searchedItem) => {
    const filteredEmps = this.state.employees.filter(
      (employee) => employee.name.last = searchedItem
    );
    this.setState({ employees: filteredEmps });
  };

  render() {
    return (
      <div className="container">
        this.handleSearch(this.state.value)
        <input
          value={this.state.value}
          firstName="firstName"
          onChange={this.handleOnChange}
          type="text"
          placeholder="First Name"
        />
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
