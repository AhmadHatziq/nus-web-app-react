// import statements
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import FormText from '../components/FormText'
import FormSelect from '../components/FormSelect'

function ManageCustomer() {

  // used to capture id for edit case
  const {
      id = 0
  } = useParams();

  // used for navigating to other pages after adding/editing
  // a record
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");

  // TODO: define other state variables

  // define the buttonLabel
  const buttonLabel = id === 0 ? "Add" : "Edit";

  // TODO: integrate with API
  function validate() {
      if (name.trim().length <= 0) {
          alert("Please enter a name");
          return false;
      }
      return true;
  }

  function handleAddEditAction(e) {
      e.preventDefault();
      if (validate()) {
          if (id === 0) {

              // TODO: add case

          } else {

              // TODO: edit case

          }
      } //end if
  }
  return ( 
    <div className = "form-container" >
      <h1>ManageCustomer Component</h1>
      
      <form onSubmit = {
          handleAddEditAction
        } > {
            /* TODO: complete the FormText and FormSelect
              implementations */
        } 
      <FormText/>
      <FormSelect
        selectedValue = {
            gender
        }
        onChange = {
            (e) => setGender(e.target.value)
        }
      /> 
      
      <FormText/> 
      <FormText/>

      <div className = "row align-right" >
      
      <input type = "submit"
        value = {
            buttonLabel
        }
        className = "btn btn-blue" />

      </div> 
      </form> 
      </div>
  );
}
export default ManageCustomer;