import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Sidebar from "./components/Sidebar";
 
import "./App.css";
// import SearchCustomers from "./containers/SearchCustomers";
// import ManageCustomer from "./containers/ManageCustomer";

/*
  // Below is the final App component, when all the 4 components have been built (Sidebar, Home, ManageCustomer & SearchCustomers)
    <div>
      <Sidebar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<ManageCustomer />} />
          <Route path="/view/:id" element={<ManageCustomer />} />
          <Route path="/customers" element={<SearchCustomers />} />
        </Routes>
      </div>
    </div>
*/
 
function App() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
 
export default App;