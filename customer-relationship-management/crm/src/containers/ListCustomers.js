// Import statements 
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { deleteCustomer } from '../helpers/Api'

function ListCustomers() {

  // Define state variables
  const [allCustomers, setAllCustomers] = useState([])
  const [shownCustomers, setShownCustomers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // used for navigating to other pages after adding/editing
  // a record
  const navigate = useNavigate();

  // Used to handle the Edit button being clicked
  const editHandler = (customer) => {
    console.log("Edit button pressed")
  }

  // Used to handle the Delete button being clicked 
  const deleteHandler = async (customer) => {
    
    const confirmed = window.confirm('Are you sure you want to delete?');
    if (confirmed) {
      
      // Proceed with deleting by issuing a DELETE request to the backend 
      const response = await deleteCustomer(customer.id)

      // Redirect the user back to the list customers page 
      alert(`Customer ${customer.name} has been deleted`)
      navigate(0)
  }

  }

  // Used to handle the search functionality 
  const searchHandler = (event) => {

    // Set search term 
    event.preventDefault()
    const searchValue = (event.target.value).toLowerCase() 
    setSearchTerm(searchValue)

    // Filter the customers with the search term. 
    // Will search from the allCustomers state and set the value for shownCustomers 
    
    let matchingCustomers = []
    for (let i = 0; i < allCustomers.length; i++) {
      let customer = allCustomers[i]
      let customerFields = `${customer.address} ${customer.gender} ${customer.name} ${customer.phone}`
      if (customerFields.toLowerCase().includes(searchValue)){
        matchingCustomers.push(customer)
      }
    }
    // console.log('Search term ', searchValue)
    // console.log('Matching customers: ', matchingCustomers)

    // Set the customers to only the matching customers
    setShownCustomers(matchingCustomers)
    
  }

  // With useEffect, populate the customers from the backend. 
  useEffect( () => {

    const setCustomerData = async () => {
      try {
        const response = await fetch('http://localhost:3001/customers', {
          method: 'GET'
        })
        const customerData = await response.json() 
        // console.log("Received customerData from backend: ", customerData)
        setAllCustomers(customerData)
        setShownCustomers(customerData)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    setCustomerData() 
  }, [])

  // For each customer, return a HTML row, <tr>, component. 
  // Only display the shownCustomers
  const rows = shownCustomers.map( customer => {
      return ( 
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>{customer.gender}</td>
          <td>{customer.address}</td>
          <td>{customer.phone}</td>
          <td>
            <button className="btn btn-orange" onClick={() => editHandler(customer)}>
              Edit
            </button>
            <button className="btn btn-red" onClick={() => deleteHandler(customer)}>
              Delete
            </button>
          </td>
        </tr>
      );
  });

  return ( <>
    <div>
      <h1>Customer List</h1>
      <div>
        <input type="text" placeholder="Enter search terms" onChange={searchHandler} value={searchTerm}/>
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