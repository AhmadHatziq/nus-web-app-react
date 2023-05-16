// TODO: define the relevant props to allow ManageCustomer to
// connect with it
function FormText({label, fieldName, state, setState}) {

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-25">
        <label>{label}: </label>
      </div>
      <div className="col-75">
      <input type="text" name={fieldName} value={state} onChange={handleChange}/>
      </div>
    </div>
    );
  }
  export default FormText;