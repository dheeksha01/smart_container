// import type React from "react"
// import { useState, useEffect } from "react"

// interface Notification {
//   id: string
//   message: string
//   date: string
// }

// const Notifications: React.FC = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([])

//   useEffect(() => {
//     // TODO: Fetch notifications from the backend
//     // For now, we'll use mock data
//     const mockNotifications: Notification[] = [
//       { id: "1", message: "New cargo added to your shipment", date: "2023-05-01" },
//       { id: "2", message: "Loading plan generated for your cargo", date: "2023-05-02" },
//       { id: "3", message: "Shipment status updated", date: "2023-05-03" },
//     ]
//     setNotifications(mockNotifications)
//   }, [])

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Notifications</h1>
//       <ul className="space-y-4">
//         {notifications.map((notification) => (
//           <li key={notification.id} className="bg-white shadow rounded-lg p-4">
//             <p className="text-lg">{notification.message}</p>
//             <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Notifications

