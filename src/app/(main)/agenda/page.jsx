import React from "react";

const AgendaPage = () => {
  const agendaItems = [
    {
      time: "09:00 AM",
      title: "Introduction & Welcome",
      speaker: "John Doe",
      gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    {
      time: "10:00 AM",
      title: "Keynote Speech",
      speaker: "Jane Smith",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      time: "11:30 AM",
      title: "Workshop: Building with React",
      speaker: "Alice Johnson",
      gradient: "bg-gradient-to-r from-cyan-500 to-purple-500",
    },
    {
      time: "01:00 PM",
      title: "Lunch Break",
      speaker: "N/A",
      gradient: "bg-gradient-to-r from-purple-500 to-yellow-400",
    },
    {
      time: "02:00 PM",
      title: "Panel Discussion: AI in Tech",
      speaker: "Michael Lee",
      gradient: "bg-gradient-to-r from-yellow-500 to-pink-500",
    },
    {
      time: "03:30 PM",
      title: "Closing Remarks",
      speaker: "Sarah Connor",
      gradient: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-[60vh] bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 py-4">
          Event Agenda
        </h1>
        <div className="space-y-2">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:justify-between md:items-center py-3 px-5 rounded-lg shadow-md text-white ${item.gradient} hover:opacity-95 transition-opacity duration-200`}
            >
              <div className="md:w-1/3 mb-2 md:mb-0 text-base font-bold text-center md:text-left">
                {item.time}
              </div>
              <div className="md:w-1/3 text-lg font-extrabold text-center justify-center md:text-right">
                {item.title}
              </div>
              <div className="md:w-1/3 text-sm font-medium text-center md:text-right">
                {item.speaker}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
