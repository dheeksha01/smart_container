// import type React from "react"
// import { useNavigate } from "react-router-dom"

// const Dashboard: React.FC = () => {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem("token")
//     navigate("/login")
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div>
//               <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <p>You have successfully logged in!</p>
//                 <p>This is where you would see your cargo management information.</p>
//               </div>
//               <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
//                 <button onClick={handleLogout} className="text-cyan-600 hover:text-cyan-700">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

