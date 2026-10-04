import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  client: "",
  status: "In Progress",
  owner: "",
  description: "",
  startDate: "",
  endDate: "",
  totalHours: "",
  finalCost: "",
};

function CreateProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createProject = async () => {
    const newProject = {
      id: `p${Date.now()}`,
      name: formData.name,
      description: formData.description || "New project",
      owner: formData.owner || "Jahnavi",
      client: formData.client || "Not available",
      status: formData.status || "In Progress",
      startDate: formData.startDate || "",
      endDate: formData.endDate || "",
      hours: Number(formData.totalHours) || 0,
      totalHours: Number(formData.totalHours) || 0,
      estimate: Number(formData.finalCost) || 0,
      finalCost: Number(formData.finalCost) || 0,
      team: [],
    };

    const response = await fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });

    const project = await response.json();
    navigate(`/projects/${project.id}/estimate`);
  };

  return (
    <div className="page">
      <h1>Create Project</h1>

      <div className="project-form">
        <label>
          Project Title
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Project title"
          />
        </label>

        <label>
          Client
          <input
            type="text"
            name="client"
            value={formData.client}
            onChange={handleChange}
            placeholder="Client name"
          />
        </label>

        <label>
          Status
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </label>

        <label>
          Owner
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            placeholder="Owner"
          />
        </label>

        <label>
          Description
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project description"
          />
        </label>

        <label>
          Starting Date
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Ending Date
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Total Hours
          <input
            type="number"
            name="totalHours"
            value={formData.totalHours}
            onChange={handleChange}
            placeholder="0"
          />
        </label>

        <label>
          Final Cost
          <input
            type="number"
            name="finalCost"
            value={formData.finalCost}
            onChange={handleChange}
            placeholder="0"
          />
        </label>

        <button type="button" onClick={createProject}>
          Add
        </button>
      </div>
    </div>
  );
}

export default CreateProject;

