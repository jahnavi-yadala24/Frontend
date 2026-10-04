import { useOutletContext } from "react-router-dom";

function ProjectTeam() {

  const project = useOutletContext();

  return (
    <div className="page">

      <h2>Team Members</h2>

      {project.team.map((member) => (

        <p key={member}>
          {member}
        </p>

      ))}

    </div>
  );
}

export default ProjectTeam;
