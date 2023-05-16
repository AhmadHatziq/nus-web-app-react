// TODO: define other relevant props to allow ManageCustomer
// to connect with it
function FormSelect({
  inputValue_01,
  selectedValue,
  onChange, 
  selectData
}) {
  //TODO: define the options for the <select></select>
  //think component-design (this FormSelect could
  //be used in other cases where we need dropdown
  //menus not just for this gender - Male/Female case only)
  const options = selectData.map( element => {
      return ( 
          <p>{element}</p>
      );
  });
  return ( 
    <div className = "row" >
      <h1>FormSelect component</h1>
      <div className = "col-25" > {
          /* TODO:Put in the label */ } 
      </div> 
      <div className = "col-75" >
        <select onChange = {onChange} value={selectedValue}>
          {options}
        </select> 
      </div>
    </div>
  );
}
export default FormSelect;