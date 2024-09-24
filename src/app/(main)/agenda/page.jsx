import React from "react";

const AgendaPage = () => {
  const agendaItems = [
    { time: "09:00 AM", title: "Introduction & Welcome" },
    { time: "10:00 AM", title: "Keynote Speech" },
    { time: "11:30 AM", title: "Workshop: Building with React" },
    { time: "01:00 PM", title: "Lunch Break" },
    { time: "02:00 PM", title: "Panel Discussion: AI in Tech" },
    { time: "03:30 PM", title: "Closing Remarks" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-magenta-500 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 py-6">
          Event Agenda
        </h1>
        <ul className="divide-y divide-pink-300">
          {agendaItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-4 px-6 transition-colors duration-200 hover:bg-yellow-100"
            >
              <span className="text-lg font-medium text-purple-800">
                {item.time}
              </span>
              <span className="text-lg text-magenta-700">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgendaPage;
