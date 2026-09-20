/*import React, {Component} from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data:
      [
        {
          "name":"Jahnavi"
        },
        {
          "name":"Susila"
        },
        {
          "name":"Subbu"
        }
      ]
    }
  }
  render(){
    return (
      <div>
        <StudentName/>
        <ul>
          {this.state.data.map((item) => <List data = {item}/>)}
        </ul>
      </div>
    );
  }
}
class StudentName extends React.Component{
  render() {
    return(
      <div>
        <h1>Student Name Details</h1>
      </div>

    );
  }
}
class List extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
  }
}
export default App;*/


import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          name: "E-Commerce Website",
          client: "ABC Technologies",
          status: "Completed",
          owner: "Jahnavi",
          totalHours: 120,
          finalEstimatedCost: 75000
        },
        {
          name: "Banking Application",
          client: "XYZ Bank",
          status: "In Progress",
          owner: "Susila",
          totalHours: 180,
          finalEstimatedCost: 95000
        },
        {
          name: "Student Management System",
          client: "ABC College",
          status: "Pending",
          owner: "Subbu",
          totalHours: 90,
          finalEstimatedCost: 50000
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <ProjectTitle />

        <div className="project-container">
          {this.state.projects.map((project, index) => (
            <ProjectCard key={index} data={project}/>
          ))}
        </div>
      </div>
    );
  }
}

class ProjectTitle extends React.Component {
  render() {
    return (
      <div>
        <h1>Project Portfolio</h1>
        <p>Overview of all projects</p>
      </div>
    );
  }
}

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <h2>{this.props.data.name}</h2>

        <p>
          <strong>Client:</strong> {this.props.data.client}
        </p>

        <p>
          <strong>Status:</strong> {this.props.data.status}
        </p>

        <p>
          <strong>Owner:</strong> {this.props.data.owner}
        </p>

        <p>
          <strong>Total Hours:</strong> {this.props.data.totalHours} hours
        </p>

        <p>
          <strong>Final Estimated Cost:</strong> Rs
          {this.props.data.finalEstimatedCost}
        </p>
      </div>
    );
  }
}

export default App;

