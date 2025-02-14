import { Link, Routes, Route, useNavigate } from "react-router-dom"
import Profile from "./Profile"
import PackageForm from "./PackageForm"
import PastOrders from "./PastOrders"
import Feedback from "./feedback"
import Notifications from "./Notifications"

function UserDashboard() {
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
          <Link to="/user/profile" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Profile
          </Link>
          <Link to="/user/package" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Send Package
          </Link>
          <Link to="/user/past-orders" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Past Orders
          </Link>
          <Link to="/user/feedback" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Feedback
          </Link>
          <Link to="/user/notifications" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            Notifications
          </Link>
          <button onClick={handleLogout} className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200">
            Logout
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="package" element={<PackageForm />} />
          <Route path="past-orders" element={<PastOrders />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="notifications" element={<Notifications />} />
          <Route index element={<h1>Welcome to User Dashboard</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default UserDashboard

