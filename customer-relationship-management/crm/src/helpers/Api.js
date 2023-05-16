const baseUrl = "http://localhost:3001/customers"

// Creates a new customer with a POST request 
// newCustomer is an object with the properties name, gender, address, phone 
const createNewCustomer = async (newCustomer) => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  const jsonObject = JSON.stringify(newCustomer)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: jsonObject,
    redirect: 'follow'
  }

  const response = await fetch(baseUrl, requestOptions)
  return response

}

// Delete a customer with a DELETE request
const deleteCustomer = async(customerId) => {
  const deleteUrl = `${baseUrl}/${customerId}`
  const response = await fetch(deleteUrl, {
    method: 'DELETE'
  })
  return response 
}

export { createNewCustomer, deleteCustomer }