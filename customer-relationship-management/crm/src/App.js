import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
 
import "./App.css";
import ListCustomers from "./containers/ListCustomers";
import ManageCustomer from "./containers/ManageCustomers";
import SearchCustomers from "./containers/SearchCustomers"

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
      <BrowserRouter>
        <h1>Hello World</h1>
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<ManageCustomer />} />
            <Route path="/view/:id" element={<ManageCustomer />} />
            <Route path="/customers" element={<SearchCustomers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;