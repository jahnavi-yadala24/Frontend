import { useEffect, useState } from "react";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  const inProgressCount = projects.filter(
    (project) => project.status?.toLowerCase() === "in progress",
  ).length;
  const estimatedCost = projects.reduce(
    (total, project) => total + Number(project.finalCost ?? project.estimate ?? 0),
    0,
  );

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      <div className="dashboard-grid">
        <div className="stat-card">
          <span>Total Projects</span>
          <strong>{projects.length}</strong>
        </div>

        <div className="stat-card">
          <span>In Progress</span>
          <strong>{inProgressCount}</strong>
        </div>

        <div className="stat-card">
          <span>Estimated Cost</span>
          <strong>₹{estimatedCost.toLocaleString("en-IN")}</strong>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2>Recent Activity</h2>
        <p>Project planning and estimation are updated regularly.</p>
      </div>
    </div>
  );
}

export default Home;
