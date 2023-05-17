import { Link } from "react-router-dom";

export default function Programming(props) {
  return (
    <div>
      List of Programming modules:
      <ul>
        <li>
          <Link to="/module/IS3106/title">IS3106 (title)</Link> |{" "}
          <Link to="/module/IS3106/description">(description)</Link> |{" "}
          <Link to="/module/IS3106">(full details)</Link>
        </li>
        <li>
          <Link to="/module/IS4103/title">IS4103 (title)</Link> |{" "}
          <Link to="/module/IS4103/description">(description)</Link> |{" "}
          <Link to="/module/IS4103">(full details)</Link>
        </li>
      </ul>
    </div>
  );
}
