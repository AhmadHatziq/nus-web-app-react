import { Routes, Route } from "react-router-dom";
import Programming from "./Programming";
import Profile from "./Profile";
import Module from "./Module";
import Math from "./Math";
import Home from "./Home";

export default function Main(props) {
  return (
    <div>
      <h1>Welcome John!</h1>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/math" element={<Math />} />
        <Route path="/module/:modulecode/:type" element={<Module />} />
        <Route path="/module/:modulecode" element={<Module />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
