import { Link } from "react-router-dom";

export default function Math(props) {
  return (
    <div>
      List of Math modules:
      <ul>
        <li>
          <Link to="/module/MA1301/title">MA1301 (title)</Link> |{" "}
          <Link to="/module/MA1301/description">(desciption)</Link> |{" "}
          <Link to="/module/MA1301">(full details)</Link>
        </li>
        <li>
          <Link to="/module/MA1312/title">MA1312 (title)</Link> |{" "}
          <Link to="/module/MA1312/description">(desciption)</Link> |{" "}
          <Link to="/module/MA1312">(full details)</Link>
        </li>
      </ul>
    </div>
  );
}
