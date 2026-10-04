import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-panel">
        <header className="topbar">
          <div className="topbar__user">
            <span className="topbar__greet">Welcome back</span>
            <h3>Jahnavi</h3>
          </div>

          <button
            className="topbar__cta"
            onClick={() => navigate("/create-project")}
          >
            + Add
          </button>
        </header>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
