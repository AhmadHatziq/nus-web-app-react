import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/programming">Programming</NavLink>
      </li>
      <li>
        <NavLink to="/math">Math</NavLink>
      </li>
    </ul>
  );
}
