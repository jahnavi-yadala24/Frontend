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


/*import React, { Component } from "react";
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

export default App; */

import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // Only one state: tasks array
    this.state = {
      tasks: [],
    };

    // Role rates
    this.roleRates = {
      developer: 1000,
      designer: 800,
      tester: 600,
      manager: 1200,
    };
  }

  // Add an empty task row
  addTask = () => {
    const newTask = {
      id: Date.now(),
      name: "",
      role: "developer",
      hours: 0,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  // Update one field of a task
  updateTask = (id, field, value) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              [field]:
                field === "hours" ? Number(value) : value,
            }
          : task
      ),
    });
  };

  // Delete task
  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(
        (task) => task.id !== id
      ),
    });
  };

  // Calculate row cost
  getRowCost = (task) => {
    return task.hours * this.roleRates[task.role];
  };

  // Calculate total hours
  getTotalHours = () => {
    return this.state.tasks.reduce(
      (total, task) => total + task.hours,
      0
    );
  };

  // Calculate total cost
  getTotalCost = () => {
    return this.state.tasks.reduce(
      (total, task) => total + this.getRowCost(task),
      0
    );
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="app">

        {/* Heading */}
        <h1>Estimation Table</h1>

        <p className="subtitle">
          Add tasks and calculate project cost
        </p>

        {/* Add Button */}
        <div className="button-container">
          <button
            className="add-button"
            onClick={this.addTask}
          >
            + Add Task
          </button>
        </div>

        {/* Summary */}
        <div className="summary">

          <div className="summary-card">
            <h3>Total Tasks</h3>
            <p>{tasks.length}</p>
          </div>

          <div className="summary-card">
            <h3>Total Hours</h3>
            <p>{this.getTotalHours()}</p>
          </div>

          <div className="summary-card">
            <h3>Total Cost</h3>
            <p>
              ₹{this.getTotalCost().toLocaleString()}
            </p>
          </div>

        </div>

        {/* Empty State */}
        {tasks.length === 0 ? (

          <div className="empty-state">
            <h2>No tasks added</h2>

            <p>
              Click "Add Task" to create a new task.
            </p>
          </div>

        ) : (

          /* Table */
          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Role</th>
                  <th>Hours</th>
                  <th>Rate / Hour</th>
                  <th>Cost</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>

                {tasks.map((task) => (

                  <tr key={task.id}>

                    {/* Name */}
                    <td>
                      <input
                        type="text"
                        value={task.name}
                        placeholder="Enter task name"
                        onChange={(e) =>
                          this.updateTask(
                            task.id,
                            "name",
                            e.target.value
                          )
                        }
                      />
                    </td>

                    {/* Role */}
                    <td>
                      <select
                        value={task.role}
                        onChange={(e) =>
                          this.updateTask(
                            task.id,
                            "role",
                            e.target.value
                          )
                        }
                      >
                        <option value="developer">
                          Developer
                        </option>

                        <option value="designer">
                          Designer
                        </option>

                        <option value="tester">
                          Tester
                        </option>

                        <option value="manager">
                          Manager
                        </option>
                      </select>
                    </td>

                    {/* Hours */}
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={task.hours}
                        onChange={(e) =>
                          this.updateTask(
                            task.id,
                            "hours",
                            e.target.value
                          )
                        }
                      />
                    </td>

                    {/* Rate */}
                    <td>
                      ₹
                      {this.roleRates[
                        task.role
                      ].toLocaleString()}
                    </td>

                    {/* Cost */}
                    <td className="cost">

                      {task.hours === 0
                        ? "—"
                        : `₹${this.getRowCost(
                            task
                          ).toLocaleString()}`}

                    </td>

                    {/* Delete */}
                    <td>
                      <button
                        className="delete-button"
                        onClick={() =>
                          this.deleteTask(task.id)
                        }
                      >
                        Delete
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
    );
  }
}

export default App;


