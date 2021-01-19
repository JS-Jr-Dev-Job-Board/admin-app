import React, { Component } from "react";
import axios from "./axios";






class DashboardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Jobs: [],
    };
  }
  getJobsData() {
    axios
      .get(`/`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const jobs = Object.keys(data).map((key) => {
          return (
            <div key={key}>
              {data[key].map((job) => {
                return (
                  <div className="card" key={job.id}>
                    <p>{job.id}</p>
                    <h2>{job.companyName}</h2>
                    <p>{job.salary}</p>
                    <p>{job.description}</p>
                    <button href={job.applyUrl}>apply-link</button>
                  </div>
                );
              })}
            </div>
          );
        });
        this.setState({
          jobs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getJobsData();
  }



  render() {
    return (
  
      <div className="dashboardCard">

       <h1>Current Available Positions</h1>
        <h3>{this.state.jobs}</h3>
  
      </div>
  
    );
  }
}
export default DashboardCard;
