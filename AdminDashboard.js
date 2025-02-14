import { Link, Routes, Route, useNavigate } from "react-router-dom"
import UserManagement from "./UserManagement"
import PackageManagement from "./PackageManagement"
import FeedbackManagement from "./FeedbackManagement"

function AdminDashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userRole")
    navigate("/login")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-10">
          <Link to="/admin/users" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            User Management
          </Link>
          <Link to="/admin/packages" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Package Management
          </Link>
          <Link to="/admin/feedback" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Feedback Management
          </Link>
          <button onClick={handleLogout} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200">
            Logout
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <Routes>
          <Route path="users" element={<UserManagement />} />
          <Route path="packages" element={<PackageManagement />} />
          <Route path="feedback" element={<FeedbackManagement />} />
          <Route index element={<h1>Welcome to Admin Dashboard</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default AdminDashboard

