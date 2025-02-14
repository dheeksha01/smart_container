"use client"

import { useState } from "react"
import axios from "axios"

function Feedback() {
  const [feedback, setFeedback] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    try {
      await axios.post(
        "http://localhost:5000/api/user/feedback",
        { message: feedback },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } },
      )
      setSuccess("Feedback submitted successfully")
      setFeedback("")
    } catch (error) {
      console.error("Error submitting feedback:", error)
      setError("Failed to submit feedback. Please try again.")
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Provide Feedback</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Please share your thoughts..."
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

export default Feedback

