import { useOutletContext } from "react-router-dom";

function ProjectEstimate() {
  const project = useOutletContext();

  const totalHours = project.totalHours ?? project.hours ?? 0;
  const finalCost = project.finalCost ?? project.estimate ?? 0;

  return (
    <div className="page">
      <h2>Project Details</h2>

      <div className="project-detail-grid">
        <div className="detail-item">
          <span>Project Title</span>
          <strong>{project.name}</strong>
        </div>

        <div className="detail-item">
          <span>Client</span>
          <strong>{project.client || "Not available"}</strong>
        </div>

        <div className="detail-item">
          <span>Status</span>
          <strong>{project.status || "Not available"}</strong>
        </div>

        <div className="detail-item">
          <span>Starting Date</span>
          <strong>{project.startDate || "Not available"}</strong>
        </div>

        <div className="detail-item">
          <span>Ending Date</span>
          <strong>{project.endDate || "Not available"}</strong>
        </div>

        <div className="detail-item">
          <span>Total Hours</span>
          <strong>{totalHours}</strong>
        </div>

        <div className="detail-item">
          <span>Final Cost</span>
          <strong>₹{Number(finalCost).toLocaleString("en-IN")}</strong>
        </div>

        <div className="detail-item">
          <span>Owner</span>
          <strong>{project.owner || "Not available"}</strong>
        </div>
      </div>

      <div className="estimate-box">
        <h3>{project.name}</h3>
        <p>Estimated Hours: {totalHours}</p>
        <p>Estimated Cost: ₹{Number(finalCost).toLocaleString("en-IN")}</p>
      </div>
    </div>
  );
}

export default ProjectEstimate;
