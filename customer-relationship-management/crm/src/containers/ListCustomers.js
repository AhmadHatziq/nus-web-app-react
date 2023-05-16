// Import statements 
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function ListCustomers() {

  // Define state variables
  const [customers, setCustomers] = useState([]);

  // used for navigating to other pages after adding/editing
  // a record
  const navigate = useNavigate();

  // Used to handle the Edit button being clicked
  const editHandler = () => {
    console.log("Edit button pressed")
  }

  // Used to handle the Delete button being clicked 
  const deleteHandler = () => {
    console.log("Delete button pressed")
  }

  // With useEffect, populate the customers from the backend. 
  useEffect( () => {

    const setCustomerData = async () => {
      try {
        const response = await fetch('http://localhost:3001/customers', {
          method: 'GET'
        })
        const customerData = await response.json() 
        console.log("Received customerData from backend: ", customerData)
        setCustomers(customerData)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    setCustomerData() 
  }, [])


  //TODO: complete implementation

  // For each customer, return a HTML row, <tr>, component. 
  const rows = customers.map( element => {
      return ( 
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.gender}</td>
          <td>{element.address}</td>
          <td>{element.phone}</td>
          <td>
            <button className="btn btn-orange" onClick={editHandler}>
              Edit
            </button>
            <button className="btn btn-red" onClick={deleteHandler}>
              Delete
            </button>
          </td>
        </tr>
      );
  });

  return ( <>
    <div>
      <h1>ListCustomers component</h1>
      <div>
        <input type="text" placeholder="Enter search terms"/>
        <br/><br/>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  </>
  );
}
export default ListCustomers;