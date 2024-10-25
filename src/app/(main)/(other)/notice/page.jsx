"use client";
import { motion } from "framer-motion";

// Quiz Data Array
const quizData = [
  { title: "Quiz 1", startTime: "10:00 AM", endTime: "10:30 AM" },
  { title: "Quiz 2", startTime: "11:00 AM", endTime: "11:30 PM" },
  { title: "Quiz 3", startTime: "12:00 PM", endTime: "12:30 PM" },
  { title: "Quiz 4", startTime: "01:00 PM", endTime: "01:30 PM" },
  { title: "Quiz 5", startTime: "02:00 PM", endTime: "02:30 PM" },
  { title: "WIT Dreamin' Quiz", startTime: "03:00 PM", endTime: "03:30 PM" },
  { title: "Agentforce Quiz", startTime: "04:30 PM", endTime: "05:00 PM" },
];

export default function ClassyPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center px-4 pt-[-250px] pb-8 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Event Agenda
      </h1>

      {/* Image Container */}
      <motion.div
        className="w-full max-w-4xl h-80 flex justify-center items-center shadow-2xl overflow-hidden bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1729868528/agenda_s7orz5.jpg"
          alt="Framed Agenda"
          className="w-full h-full object-fit"
        />
      </motion.div>

      {/* Table Heading */}
      <h2 className="text-2xl underline underline-offset-2 font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Salesforce Quiz Schedule
      </h2>

      {/* Table Container */}
      <motion.div
        className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden p-6 border-4 border-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          borderImageSource: "linear-gradient(to right, #6EE7B7, #3B82F6)",
          borderImageSlice: 1,
        }}
      >
        <table className="table-auto w-full text-left text-gray-800 border-collapse">
          <thead>
            <tr>
              <th
                className="px-4 py-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 border border-transparent"
                style={{
                  borderImage: "linear-gradient(to right, #6EE7B7, #3B82F6) 1",
                }}
              >
                Quiz Title
              </th>
              <th
                className="px-4 py-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 border border-transparent"
                style={{
                  borderImage: "linear-gradient(to right, #6EE7B7, #3B82F6) 1",
                }}
              >
                Start Time
              </th>
              <th
                className="px-4 py-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 border border-transparent"
                style={{
                  borderImage: "linear-gradient(to right, #6EE7B7, #3B82F6) 1",
                }}
              >
                End Time
              </th>
            </tr>
          </thead>
          <tbody>
            {quizData.map((quiz, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td
                  className="px-4 py-2 border border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #6EE7B7, #3B82F6) 1",
                  }}
                >
                  {quiz.title}
                </td>
                <td
                  className="px-4 py-2 border border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #6EE7B7, #3B82F6) 1",
                  }}
                >
                  {quiz.startTime}
                </td>
                <td
                  className="px-4 py-2 border border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #6EE7B7, #3B82F6) 1",
                  }}
                >
                  {quiz.endTime}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
