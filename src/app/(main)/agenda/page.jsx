"use client";
import React from "react";
import Link from "next/link";


const AgendaPage = () => {
  const agendaItems = [
    {
      id: 1,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Sangeeta Sinha",
      talk: "Panel",
      time: "10:00 AM",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306945/speakers/Sangeeta_Sinha_ppsryr.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sangeeta-sinha-64bb171a",
      twitterUrl: "https://x.com/Sangeet05242788",
    },
    {
      id: 2,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Priya Shaw",
      talk: "Enabling intelligent integration with Einstein and MuleSoft",
      time: "10:00 AM",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306945/speakers/Priya_Shaw_bwfsdc.jpg",
      linkedinUrl: "https://www.linkedin.com/in/priya-shaw/",
      twitterUrl: "https://twitter.com/priyashaw260/",
    },
    {
      id: 3,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Amit Malik",
      talk: "An Architect eye to Salesforce AI",
      time: "10:00 AM",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Amit_Malik_te9yno.png",
      linkedinUrl: "https://www.linkedin.com/in/amitmalikus",
      twitterUrl: "https://x.com/amitmalikus",
    },
    {
      id: 4,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Lakhan Meghani",
      talk: "Mastering SFMC REST APIs for Marketing Success",
      time: "10:00 AM",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Lakhan_Meghani_obnl4l.jpg",
      linkedinUrl: "https://www.linkedin.com/in/lakhan-meghani-003639167/",
      twitterUrl: "https://x.com/Lakhan_sfdc",
    },
    {
      id: 5,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Santanu Boral",
      talk: "Building your first Salesforce product for AppExchange",
      time: "10:00 AM",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Santanu_Boral_wtca6v.png",
      linkedinUrl: "https://www.linkedin.com/in/santanuboral/",
      twitterUrl: "https://x.com/santanuboral",
    },
    {
      id: 6,
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
      speaker: "Paresh Kumar Lalchandani",
      talk: "Unlocking Collaboration: An Introduction to Salesforce.org Open Source Commons",
      time: "10:00 AM",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Paresh_Kumar_zbtoev.jpg",
      linkedinUrl: "https://www.linkedin.com/in/pareshlalchandani/",
      twitterUrl: "https://x.com/Paresh_Kumar",
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
              <div className="md:w-1/3 text-md capitalize font-bold text-center">
                {item.talk}
              </div>
              <Link href={item.linkedinUrl} target="_blank" className="md:w-1/3 underline text-lg font-extrabold text-center md:text-right">
                Speaker : {item.speaker}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
