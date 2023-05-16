
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import FormText from '../components/FormText'
import FormSelect from '../components/FormSelect'
import { createNewCustomer } from '../helpers/Api'
import { getSingleCustomer } from '../helpers/Api'

function ManageCustomer() {

  // used to capture id for edit case. 
  // id === 0 for add, else, id will be the ID of the person to be edited. 
  const {
      id = 0
  } = useParams();

  // used for navigating to other pages after adding/editing
  // a record
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  // define the buttonLabel
  const buttonLabel = id === 0 ? "Add" : "Edit";

  // useEffect is used to pre-populate the fields, when editing an existing customer, given the id param
  useEffect( () => {
    if (id == 0) {
      return 
    }

    // Do a GET request to obtain details regarding the specified user & set the form fields 
    const setCustomerEditData = async(id) => {
      try {
        const customer = await getSingleCustomer(id)
        // console.log("Received customerData from backend: ", customer)

        setName(customer.name)
        setGender(customer.gender)
        setAddress(customer.address)
        setPhone(customer.phone)

      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }

    setCustomerEditData(id)

  }, [])

  // Validates the input for each form field 
  function validate() {
      if (name.trim().length <= 0) {
        alert("Please enter a name");
        return false;
      }
      if (gender.trim().length <= 0) {
        alert("Please select a gender");
        return false;
      }
      if (address.trim().length <= 0) {
        alert("Please enter an address");
        return false;
      }
      if (phone.trim().length <= 0) {
        alert("Please enter a phone number");
        return false;
      }
      
      return true;
  }

  async function handleAddEditAction(e) {
      
    e.preventDefault();
    console.log("Form variables are: ", name, gender, address, phone)

    // Clear the form fields 
    setName("")
    setGender("")
    setAddress("")
    setPhone("")

    if (validate()) {
        if (id === 0) {

            // Add a new customer 
            const newCustomer = {
              name, gender, address, phone
            }
            const response = await createNewCustomer(newCustomer)

            // If success, redirect user to the customer list 
            if (response.ok) {
              alert('Customer successfully added to the bottom of the list')
              navigate('/customers');
            } else {
              alert('Error in creating new customer. Please try again')
            }
            
        } else {

            // EDIT

        }
    } //end if


  }
  return ( 
    <div className = "form-container" >
      <h1>{buttonLabel} Customer Details</h1>

      <form onSubmit={handleAddEditAction}>
        <FormText label="Name*" fieldName="name" state={name} setState={setName}/>
        <FormSelect label="Gender" fieldName="name" state={gender} setState={setGender} optionValues={["Male", "Female"]}/>
        <FormText label="Address" fieldName="address" state={address} setState={setAddress}/>
        <FormText label="Phone" fieldName="phone" state={phone} setState={setPhone}/>
        
        <button type="submit">
          {buttonLabel}
        </button>
      </form>
      
    </div>
  );
}
export default ManageCustomer;