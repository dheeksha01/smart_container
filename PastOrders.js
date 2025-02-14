import { useState, useEffect } from "react"
import axios from "axios"

function PastOrders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/past-orders", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        setOrders(response.data)
      } catch (error) {
        console.error("Error fetching past orders:", error)
      }
    }

    fetchOrders()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Past Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="bg-white shadow rounded-lg p-4">
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Type:</strong> {order.type}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Date:</strong> {new Date(order.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PastOrders

