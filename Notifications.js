"use client"

import { useState, useEffect } from "react"
import axios from "axios"

function Notifications() {
  const [notifications, setNotifications] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/notifications", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      setNotifications(response.data)
    } catch (error) {
      console.error("Error fetching notifications:", error)
      setError("Failed to fetch notifications. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification._id} className="bg-white shadow rounded-lg p-4">
              <p className="font-semibold">{notification.message}</p>
              {notification.type === "feedback_response" && (
                <p className="mt-2">
                  <strong>Admin Response:</strong> {notification.adminResponse}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-2">{new Date(notification.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Notifications

