import { useState, useEffect } from "react"
import axios from "axios"

function CustomerDetails() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/customers", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      setCustomers(response.data)
    } catch (error) {
      console.error("Error fetching customers:", error)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerDetails

