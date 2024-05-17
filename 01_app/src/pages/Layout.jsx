import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Crime_Analysis">Crime_Analysis</Link>
          </li>
          <li>
            <Link to="/Crime_Info">Crime_Info</Link>
          </li>
          <li>
            <Link to="/Crime_Predict">Crime_Predict</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
