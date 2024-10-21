"use client";
import React from "react";
import Link from "next/link";

const AgendaPage = () => {
  const agendaItems = [
    {
      id: 1,
      speaker: "WIT Dreamin 2024",
      talk: "Registration & Breakfast",
      time: "08:30 - 09:30 AM",
      place: "Main Auditorium",
    },
    {
      id: 2,
      speaker: "Khyati Mehta & Neetu Bansal",
      talk: "Inaugral Note",
      time: "09:30 - 10:00 AM",
      place: "Main Auditorium",
    },
    {
      id: 3,
      speaker: "Arundhati Bhattacharya & Monika Goyal",
      talk: "Keynote",
      time: "10:00 - 11:15 AM",
      place: "Main Auditorium",
    },
    {
      id: 4,
      speaker: "Main Auditorium",
      talk: "Settle In",
      time: "11:15 - 11:30 AM",
      place: "Allocated Halls",
    },
    {
      id: 5,
      speaker: "Satya Sekhar & Aaditya Nag",
      talk: "Unlock Unstructured Data with RAG, Vector & Hybrid Search",
      time: "11:30 - 12:00 PM",
      place: "Victoria Hall",
    },
    {
      id: 6,
      speaker: "Sridevi Sira",
      talk: "Salesforce Power Developer - 10x Faster Developer powered by Agentforce",
      time: "11:30 - 12:00 PM",
      place: "Howrah Bridge Hall",
    },
    {
      id: 7,
      speaker: "Arunangshu Pal",
      talk: "Engage Like a Pro: Messaging In-App Web Best Practices",
      time: "11:30 - 12:00 PM",
      place: "Eden Garden Hall",
    },
    {
      id: 8,
      speaker: "Lakhan Meghani",
      talk: "Mastering SFMC REST APIs for Marketing Success",
      time: "11:30 - 12:00 PM",
      place: "Belur Hall",
    },
    {
      id: 9,
      speaker: "Shivani Singh",
      talk: "Empower your Salesforce org in the Age of AI: Data Readiness",
      time: "11:30 - 12:00 PM",
      place: "Kalighat Hall",
    },
    {
      id: 10,
      speaker: "Salesforce",
      talk: "Agentforce Workshop 1",
      time: "11:30 - 12:00 PM",
      place: "Tagore Hall",
    },
    {
      id: 11,
      speaker: "Abilash Kumar & Anand Singh",
      talk: "RLM",
      time: "12:00 - 12:30 AM",
      place: "Victoria Hall",
    },
    {
      id: 12,
      speaker: "Ashvin Bhatt",
      talk: "Mastering the Art of Data Migration",
      time: "12:00 - 12:30 AM",
      place: "Howrah Bridge Hall",
    },
    {
      id: 13,
      speaker: "Tushar Sinha & Swati Kumari",
      talk: "How does Salesforce Use Artificial Intelligence for Business Growth?",
      time: "12:00 - 12:30 AM",
      place: "Eden Garden Hall",
    },
    {
      id: 14,
      speaker: "Priya Shaw",
      talk: "Enabling intelligent integration with Einstein and MuleSoft",
      time: "12:00 - 12:30 AM",
      place: "Belur Hall",
    },
    {
      id: 15,
      speaker: "Sudharsan Vaddi",
      talk: "Einstein for Formulas for Admins and developers?",
      time: "12:00 - 12:30 AM",
      place: "Kalighat Hall",
    },
    {
      id: 16,
      speaker: "Salesforce",
      talk: "Agentforce Workshop 2",
      time: "12:00 - 12:30 PM",
      place: "Tagore Hall",
    },
    {
      id: 17,
      speaker: "Martina Dey",
      talk: "Salesforce Net Zero Cloud",
      time: "12:30 - 01:30 PM",
      place: "Victoria Hall",
    },
    {
      id: 18,
      speaker: "Arindam Roy",
      talk: "Empowering Insurance Service Agents with Agentforce",
      time: "12:30 - 01:30 PM",
      place: "Howrah Bridge Hall",
    },
    {
      id: 19,
      speaker: "Snehal Gosula",
      talk: "The Power of 1%: Innovating DevOps Through Marginal Gains",
      time: "12:30 - 01:30 PM",
      place: "Eden Garden Hall",
    },
    {
      id: 20,
      speaker: "Amrita Ghosh",
      talk: "Gen AI in healthtech",
      time: "12:30 - 01:30 PM",
      place: "Belur Hall",
    },
    {
      id: 22,
      speaker: "Salesforce",
      talk: "Agentforce Workshop 3",
      time: "12:30 - 01:30 PM",
      place: "Tagore Hall",
    },
    {
      id: 23,
      speaker: "Parag Trivedi & Collette Ostler",
      talk: "Salesforce Design System",
      time: "01:30 - 02:00 PM",
      place: "Victoria Hall",
    },
    {
      id: 24,
      speaker: "Amit Malik",
      talk: "An Architect eye to Salesforce AI",
      time: "01:30 - 02:00 PM",
      place: "Howrah Bridge Hall",
    },
    {
      id: 25,
      speaker: "Yash Sethi",
      talk: "How LWC Transforms Salesforce Flexibility and Customization",
      time: "01:30 - 02:00 PM",
      place: "Eden Garden Hall",
    },
    {
      id: 26,
      speaker: "Neelam Shazia & Dalesha Hemrajani",
      talk: "Gen AI with Data Cloud",
      time: "01:30 - 02:00 PM",
      place: "Belur Hall",
    },
    {
      id: 26,
      speaker: "Isha Sharma",
      talk: "Optimizing Resource Allocation with MuleSoft: Leveraging MuleChain Vectors & OpenAI",
      time: "01:30 - 02:00 PM",
      place: "Kalighat Hall",
    },
    {
      id: 27,
      speaker: "Salesforce",
      talk: "Agentforce Workshop 4",
      time: "01:30 - 02:00 PM",
      place: "Tagore Hall",
    },
    {
      id: 28,
      speaker: "WIT Dreamin Team",
      talk: "Lunch & Swag Store",
      time: "02:00 - 02:45 PM",
      place: "Allocated Area",
    },
    {
      id: 29,
      speaker: "Poonam Patole-Santanu Boral-Ankit Arora-Poulomi Ghosh-Anup Das",
      talk: "Community's E=MC2 (Elevate = Mission X Collaboration X Change)",
      time: "02:45 - 03:30 PM",
      place: "Main Auditorium",
    },
    {
      id: 30,
      speaker: "Anirudh Sreerambhatla",
      talk: "Well architected Workshop",
      time: "02:45 - 03:30 PM",
      place: "Tagore Hall",
    },
    {
      id: 31,
      speaker: "Salesforce, Deloitte & Cognizant",
      talk: "Sponsors Hours",
      time: "03:30 - 04:00 PM",
      place: "Main Auditorium",
    },
    {
      id: 32,
      speaker: "Salesforce",
      talk: "Agentforce Workshop 5",
      time: "03:30 - 04:00 PM",
      place: "Tagore Hall",
    },
    {
      id: 33,
      speaker:
        "Kiran Manyala, Sunil Saha, Arijit Hajra, Sangeeta Sinha, Sanket",
      talk: "Both sides of the table (Builders & Users)",
      time: "04:00 - 04:45 PM",
      place: "Main Auditorium",
    },
    {
      id: 34,
      speaker: "Salesforce",
      talk: "Agentforce Workshop 6",
      time: "04:00 - 04:45 PM",
      place: "Tagore Hall",
    },
    {
      id: 35,
      speaker: "Swati Kumari, Smita, Bilquis, Swati Taunk, Ankita Sharma",
      talk: "WIT Leaders Appreciation",
      time: "04:45 - 05:15 PM",
      place: "Tagore Hall",
    },
    {
      id: 36,
      speaker: "Salesforce",
      talk: "Agentforce Workshop 7",
      time: "04:45 - 05:15 PM",
      place: "Tagore Hall",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent py-4">
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
                By :{" "}
                <span className="italic text-yellow-300">{item.speaker}</span>
              </Link>
              <div className="md:w-1/3 text-md capitalize font-bold text-center">
                Hall :{" "}
                <span className="italic text-yellow-300">{item.place}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto my-2 py-2">
          <div
            className={`min-w-max flex flex-col md:flex-row md:justify-between md:items-center py-3 px-5 rounded-lg shadow-md text-white bg-gradient-to-r from-teal-600 to-emerald-800 hover:opacity-95 transition-opacity duration-200`}
          >
            <div className="md:w-1/3 text-lg font-bold text-center md:text-left">
              5:15 - 6:00 PM
            </div>
            <div className="md:w-1/3 text-md underline underline-offset-4 capitalize font-bold text-center">
              DEMO JAM
            </div>
          </div>
          <div
            className={`min-w-max flex flex-col md:flex-row md:justify-between md:items-center py-3 px-5 rounded-lg shadow-md text-white bg-gradient-to-r from-teal-600 to-emerald-800 hover:opacity-95 transition-opacity duration-200`}
          >
            <div className="md:w-1/3 text-lg font-bold text-center md:text-left">
              6:00 - 6:30 PM
            </div>
            <div className="md:w-1/3 text-md underline underline-offset-4 capitalize font-bold text-center">
              Closing Keynote
            </div>
          </div>
          <div
            className={`min-w-max flex flex-col md:flex-row md:justify-between md:items-center py-3 px-5 rounded-lg shadow-md text-white bg-gradient-to-r from-teal-600 to-emerald-800 hover:opacity-95 transition-opacity duration-200`}
          >
            <div className="md:w-1/3 text-lg font-bold text-center md:text-left">
              6:30 - 6:45 PM
            </div>
            <div className="md:w-1/3 text-md underline underline-offset-4 capitalize font-bold text-center">
              SWAG STORE
            </div>
          </div>
          <div
            className={`min-w-max flex flex-col md:flex-row md:justify-between md:items-center py-3 px-5 rounded-lg shadow-md text-white bg-gradient-to-r from-teal-600 to-emerald-800 hover:opacity-95 transition-opacity duration-200`}
          >
            <div className="md:w-1/3 text-lg font-bold text-center md:text-left">
              7:30 - 11:00 PM
            </div>
            <div className="md:w-1/3 text-md underline underline-offset-4 capitalize font-bold text-center">
              AFTER PARTY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
