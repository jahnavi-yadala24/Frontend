import {
  NavLink,
  Outlet,
  useParams
} from "react-router-dom";

import { useEffect, useState } from "react";

function ProjectLayout() {

  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`http://localhost:3001/projects/${projectId}`)
      .then((response) => {

        if (!response.ok) {
          throw new Error("Project not found");
        }

        return response.json();

      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch(() => {
        setProject(null);
        setLoading(false);
      });

  }, [projectId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
        <p>
          Project "{projectId}" does not exist.
        </p>
      </div>
    );
  }

  return (
    <div>

      <h1>{project.name}</h1>

      <p>{project.description}</p>

      <nav className="project-tabs">

        <NavLink
          to="overview"
          className={({ isActive }) =>
            isActive
              ? "tab active-tab"
              : "tab"
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="estimate"
          className={({ isActive }) =>
            isActive
              ? "tab active-tab"
              : "tab"
          }
        >
          Estimate
        </NavLink>

        <NavLink
          to="team"
          className={({ isActive }) =>
            isActive
              ? "tab active-tab"
              : "tab"
          }
        >
          Team
        </NavLink>

      </nav>

      <Outlet context={project} />

    </div>
  );
}

export default ProjectLayout;
