"use client"

import { useState, useEffect } from "react"
import axios from "axios"

function FeedbackManagement() {
  const [feedbacks, setFeedbacks] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/feedbacks", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      setFeedbacks(response.data)
    } catch (error) {
      console.error("Error fetching feedbacks:", error)
      setError("Failed to fetch feedbacks. Please try again.")
    }
  }

  const respondToFeedback = async (id, response) => {
    try {
      await axios.post(
        `http://localhost:5000/api/admin/feedbacks/${id}/respond`,
        { response },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      )
      setFeedbacks(
        feedbacks.map((feedback) => (feedback._id === id ? { ...feedback, adminResponse: response } : feedback)),
      )
    } catch (error) {
      console.error("Error responding to feedback:", error)
      setError("Failed to respond to feedback. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Feedback Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul className="space-y-4">
        {feedbacks.map((feedback) => (
          <li key={feedback._id} className="bg-white shadow rounded-lg p-4">
            <p>
              <strong>User:</strong> {feedback.user.email}
            </p>
            <p>
              <strong>Feedback:</strong> {feedback.message}
            </p>
            <p>
              <strong>Date:</strong> {new Date(feedback.date).toLocaleString()}
            </p>
            {feedback.adminResponse ? (
              <p>
                <strong>Admin Response:</strong> {feedback.adminResponse}
              </p>
            ) : (
              <div className="mt-2">
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Enter your response..."
                  rows="3"
                  onChange={(e) => (feedback.tempResponse = e.target.value)}
                ></textarea>
                <button
                  onClick={() => respondToFeedback(feedback._id, feedback.tempResponse)}
                  className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Send Response
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeedbackManagement

