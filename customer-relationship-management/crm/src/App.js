import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
 
import "./App.css";
import ListCustomers from "./containers/ListCustomers";
import ManageCustomer from "./containers/ManageCustomers";
 
function App() {
  return (
    <div>
      <BrowserRouter forceRefresh> 
        <h1>Hello World</h1>
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<ManageCustomer />} />
            <Route path="/view/:id" element={<ManageCustomer />} />
            <Route path="/customers" element={<ListCustomers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;