//import statements

function ListCustomers() {

  //TODO: define state variables

  //used for navigating to other pages after adding/editing
  //a record
  const navigate = useNavigate();

  //TODO: integrate with API

  //TODO: complete implementation

  const rows = data.map( element => {
      return ( 
        <tr key={id}>
          <td>Item 1</td>
          <td>Item 2</td>
          <td>Item 3</td>
          <td>Item 4</td>
          <td>Item 5</td>
          <td>
            <button className="btn btn-orange">
              Edit
            </button>
            <button className="btn btn-red">
              Delete
            </button>
          </td>
        </tr>
      );
  });
  return ( <>
    <div>
      <div>
        <input type="text" placeholder="Enter keywords"/>
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
export default SearchCustomers;