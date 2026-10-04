import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ data, ownerName }) {
  const [showOwner, setShowOwner] = useState(false);

  return (
    <>
      <div className="project-card">
        <h2>{data.name}</h2>

        <p>
          <strong>Client:</strong> {data.client}
        </p>
        <p>
          <strong>Owner:</strong> {ownerName}
        </p>
        <p>
          <strong>Total Hours:</strong> {data.totalHours}
        </p>
        <p>
          <strong>Estimated Cost:</strong>{" "}
          ₹{Number(data.finalEstimatedCost).toLocaleString("en-IN")}
        </p>

        <span className="status">{data.status}</span>

        <button
          className="view-button"
          onClick={() => setShowOwner(true)}
        >
          View
        </button>
      </div>

      {showOwner && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-icon"
              onClick={() => setShowOwner(false)}
            >
              ✕
            </button>

            <h2>Owner Details</h2>

            <div className="owner-details">
              <div className="avatar">👤</div>

              <div>
                <p>
                  <strong>Name:</strong> {ownerName}
                </p>
                <p>
                  <strong>Owner ID:</strong> {data.ownerId}
                </p>
              </div>
            </div>

            <button
              className="close-button"
              onClick={() => setShowOwner(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
