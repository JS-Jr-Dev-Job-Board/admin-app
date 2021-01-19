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
                    <h3>{job.companyName}</h3>
                    <h4>Position: </h4>
                    <p>{job.position}</p>
                    <h4>Salary:</h4>
                    <p>{job.salary}</p>
                    <h4>Description:</h4>
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

       <h2>Current Available Positions</h2>
        <div>{this.state.jobs}</div>
  
      </div>
  
    );
  }
}
export default DashboardCard;
