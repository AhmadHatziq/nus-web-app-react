

function FormSelect({label, fieldName, state, setState, optionValues}) {
  //TODO: define the options for the <select></select>
  //think component-design (this FormSelect could
  //be used in other cases where we need dropdown
  //menus not just for this gender - Male/Female case only)

  
  const displayOptions = optionValues.map( option => {
      return ( 
        <option value={option} key={option}>{option}</option>
      );
  });
  

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return ( 
    <div className = "row" >
      <div className = "col-25" >
        <label>{label}: </label>
      </div> 
      <div className = "col-75" >
        <select
          name={fieldName}
          value={state}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          {displayOptions}
        </select>
      </div>
    </div>
  );
}
export default FormSelect;