import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">P</div>
        <div>
          <p className="brand-label">Project Hub</p>
          
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/create-project"
          className={({ isActive }) =>
            isActive ? "side-link active" : "side-link"
          }
        >
          New Project
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
