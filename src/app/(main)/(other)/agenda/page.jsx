"use client";
import React from "react";
import Link from "next/link";

const AgendaPage = () => {
  const agendaItems = [
    {
      id: 1,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "WIT Dreamin 2024",
      talk: "Registration & Breakfast",
      time: "08:30 - 09:30 AM",
      place: "--------",
    },
    {
      id: 2,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Khyati Mehta & Neetu Bansal",
      talk: "Inaugral Note",
      time: "09:30 - 10:00 AM",
      place: "--------",
    },
    {
      id: 3,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Arundhati Bhattacharya & Monika Goyal",
      talk: "Keynote",
      time: "10:00 - 11:15 AM",
      place: "--------",
    },
    {
      id: 4,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "--------",
      talk: "Settle In",
      time: "11:15 - 11:30 AM",
      place: "Allocated Halls",
    },
    {
      id: 5,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Satya Sekhar & Aaditya Nag",
      talk: "Unlock Unstructured Data with RAG, Vector & Hybrid Search",
      time: "11:30 - 12:00 AM",
      place: "Victoria Hall",
    },
    {
      id: 6,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Sridevi Sira",
      talk: "Salesforce Power Developer - 10x Faster Developer powered by Agentforce",
      time: "11:30 - 12:00 AM",
      place: "Howrah Bridge Hall",
    },
    {
      id: 7,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Arunangshu Pal",
      talk: "Engage Like a Pro: Messaging In-App Web Best Practices",
      time: "11:30 - 12:00 AM",
      place: "Eden Garden Hall",
    },
    {
      id: 8,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Lakhan Meghani",
      talk: "Mastering SFMC REST APIs for Marketing Success",
      time: "11:30 - 12:00 AM",
      place: "Belur Hall",
    },
    {
      id: 9,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Shivani Singh",
      talk: "Empower your Salesforce org in the Age of AI: Data Readiness",
      time: "11:30 - 12:00 AM",
      place: "Kalighat Hall",
    },
    {
      id: 10,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Salesforce",
      talk: "Agentforce Workshop 1",
      time: "11:30 - 12:00 AM",
      place: "Tagore Hall",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 py-4">
          Event Agenda
        </h1>
        <div className="space-y-2">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:justify-between md:items-center py-3 px-5 rounded-lg shadow-md text-white bg-gradient-to-r from-teal-600 to-emerald-800 hover:opacity-95 transition-opacity duration-200`}
            >
              <div className="md:w-1/3 text-lg font-bold text-center md:text-left">
                {item.time}
              </div>
              <div className="md:w-1/3 text-md underline underline-offset-4 capitalize font-bold text-center">
                {item.talk}
              </div>
              <Link
                href={"#"}
                className="md:w-1/3 text-md font-extrabold text-center md:text-right"
              >
                By : {item.speaker}
              </Link>
              <div className="md:w-1/3 text-md capitalize font-bold text-center">
                Place :{" "}
                <span className="italic text-yellow-300">{item.place}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
