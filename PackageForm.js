import { useState } from "react"
import axios from "axios"

function PackageForm() {
  const [packageDetails, setPackageDetails] = useState({
    type: "",
    quantity: "",
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    pickupLocation: "",
    receiverName: "",
    receiverEmail: "",
    receiverPhone: "",
    dropoffLocation: "",
    returnAddress: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setPackageDetails({ ...packageDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    try {
      const response = await axios.post("http://localhost:5000/api/user/package", packageDetails, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      setSuccess("Package details submitted successfully")
      // Reset form or redirect user
    } catch (error) {
      console.error("Error submitting package details:", error)
      setError("Failed to submit package details. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Send a Package</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Package Type
          </label>
          <select
            id="type"
            name="type"
            value={packageDetails.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select type</option>
            <option value="fragile">Fragile</option>
            <option value="hard">Hard</option>
            <option value="perishable">Perishable</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={packageDetails.quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <h3 className="text-lg font-medium mb-2">Sender Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="senderName"
              name="senderName"
              value={packageDetails.senderName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              value={packageDetails.senderEmail}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="senderPhone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="senderPhone"
              name="senderPhone"
              value={packageDetails.senderPhone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={packageDetails.pickupLocation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <h3 className="text-lg font-medium mb-2">Receiver Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="receiverName" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              value={packageDetails.receiverName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="receiverEmail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="receiverEmail"
              name="receiverEmail"
              value={packageDetails.receiverEmail}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="receiverPhone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="receiverPhone"
              name="receiverPhone"
              value={packageDetails.receiverPhone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700">
            Drop-off Location
          </label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            value={packageDetails.dropoffLocation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="returnAddress" className="block text-sm font-medium text-gray-700">
          Return Address
        </label>
        <textarea
          id="returnAddress"
          name="returnAddress"
          value={packageDetails.returnAddress}
          onChange={handleChange}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Submit Package Details
      </button>
    </form>
  )
}

export default PackageForm

