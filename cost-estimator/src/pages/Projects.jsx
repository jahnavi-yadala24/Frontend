import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1>Projects</h1>

      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.name}</h2>
            <p><strong>Client:</strong> {project.client || "Not available"}</p>
            <p><strong>Status:</strong> {project.status || "Not available"}</p>
            <p><strong>Start Date:</strong> {project.startDate || "Not available"}</p>
            <p><strong>End Date:</strong> {project.endDate || "Not available"}</p>
            <p><strong>Total Hours:</strong> {project.totalHours ?? project.hours ?? 0}</p>
            <p>
              <strong>Final Cost:</strong> ₹{Number(project.finalCost ?? project.estimate ?? 0).toLocaleString("en-IN")}
            </p>
            <Link to={`/projects/${project.id}/estimate`}>
              Open Estimate
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
