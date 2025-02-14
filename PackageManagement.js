"use client"

import { useState, useEffect } from "react"
import axios from "axios"

function PackageManagement() {
  const [packages, setPackages] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetchPackages()
  }, [])

  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/packages", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      setPackages(response.data)
    } catch (error) {
      console.error("Error fetching packages:", error)
      setError("Failed to fetch packages. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Package Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">User</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg._id}>
              <td className="py-2 px-4 border-b">{pkg._id}</td>
              <td className="py-2 px-4 border-b">{pkg.type}</td>
              <td className="py-2 px-4 border-b">{pkg.quantity}</td>
              <td className="py-2 px-4 border-b">{pkg.status}</td>
              <td className="py-2 px-4 border-b">{pkg.user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PackageManagement

