import SideBar from "./SideBar";
import Main from "./Main";

export default function App() {
  return (
    <div>
      <div style={{ width: "25%", float: "left" }}>
        <SideBar />
      </div>
      <div style={{ width: "75%", float: "left" }}>
        <Main />
      </div>
    </div>
  );
}
