"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sponsor data with logos
const sponsors = [
  // ... existing sponsors and new sponsors
  {
    id: 1,
    name: "Deloitte",
    tier: "Platinum",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728391070/Deloitte-Logo_drssm6.jpg",
    description:
      "Deloitte is a global professional services firm that provides audit, tax, consulting, enterprise risk and financial advisory services. We are committed to making an impact that matters for our clients, our people, and society. With over 150 years of hard work and commitment to making a real difference, our organization has grown in scale and diversity—approximately 312,000 people in 150 countries and territories, providing these services—yet our shared culture remains the same. Our organization serves four out of five Fortune Global 500® companies. Our network of member firms in more than 150 countries and territories serves four out of five Fortune Global 500® companies.",
  },
  {
    id: 2,
    name: "Cognizant",
    tier: "Gold",
    logo: "https://www.witdreamin.com/Cognizant.png",
    description:
      "In todays fast-changing technology landscape, Cognizant works with clients to advance every aspect of how they serve their customers: digitizing their products, services, and customer experiences; automating their business processes; and modernizing their technology infrastructures. Put simply, we help clients harness digital to address their daily needs and keep their businesses relevant. As the partner they turn to execute on their digital priorities, we focus on IoT, AI, software engineering and cloud— the technologies that are changing the nature of business. We consider it our responsibility to make people feel at home in the future, no matter how technology enabled it becomes. So, we are committed to helping to solve some of humankind’s most difficult challenges in a way that is beneficial and comfortable for people through the work we do, and through investing in training people around the world in the digital skills that will be needed to do that work. We believe that the opportunity presented by technology has never been greater, and because of that opportunity, Cognizant will continue to collaborate with clients to modernize their businesses, making everyday life even better for them, their customers and the communities they serve.",
  },
  {
    id: 3,
    name: "Cloud Fulcrum",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1727465196841-0ebf9253-eed2-44c0-bb86-eb2dc8f23796.png",
    description:
      "CloudFulcrum is a global professional services firm specializing in Salesforce DevOps, Enterprise DevOps, and Digital Transformation. As a trusted partner, we empower businesses to optimize their Salesforce environments for peak performance through: Copado as a Service: We partner with Copado to provide automated end-to-end delivery, facilitating CI/CD across the Salesforce platform. DevOps Managed Services: Customized services to enhance operational efficiency. Accelerated Test Automation: Faster time-to-market through automated testing. DevOps Assessments: Expert guidance for achieving DevOps excellence. Our OpsBridge suite transforms Salesforce DevOps by leveraging advanced AI to enhance efficiency, security, and compliance. It empowers organizations to achieve operational excellence and drive strategic innovation.",
  },
  {
    id: 4,
    name: "360 SMS",
    tier: "Silver",
    logo: "https://360smsapp.com/wp-content/uploads/2022/01/logo_b046c853129b1637fa48a6e91c6a7b17_1x.webp",
    description:
      "Delivering unmatched value to businesses. By harnessing the full potential of Salesforce, 360 Degree empowers its clients with unique insights that drive informed decision-making, uncover new opportunities, and create customized experiences. This commitment to excellence positions 360 Degree as one of the Topmost Salesforce Companies In 2024.360 Degree also offers a flexible engagement model, including staff augmentation to bolster the existing team with skilled Salesforce professionals on an hourly or full-time basis. Additionally, it has developed a suite of Salesforce-native flagship products that address specific business challenges and accelerate time-to-value.",
  },
  {
    id: 5,
    name: "Exavalue",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1726416420491-074a6654-4a7b-4b9e-8436-1b5b8213f152.png",
    description:
      "Exavalu is a specialized digital transformation partner, founded by industry veterans, delivering cutting-edge solutions to Insurance, financial services, healthcare and non-profits. Deep industry knowledge coupled with multi-cloud Salesforce expertise makes us the right partner for operations transformation and fuel business growth. Our key business dimensions: Exavalu Consulting focusing on business advisory and digital strategy, Exavalu Digital offering CX, Salesforce, data analytics and core platform services and Exasure suite of business accelerators.  Accelerate business transformation with our offerings: Exasure on Industry clouds, Data Cloud services, Smart Analytics and Industry API blueprint Partner with us and supercharge your Salesforce journey",
  },
  {
    id: 6,
    name: "SmartInternz",
    tier: "Learning Partner",
    logo: "https://witblogpic.s3.amazonaws.com/1727465140282-9c85e3cb-3c4e-4012-9646-68768600808e.png",
    description:
      "The SmartInternz platform provides a collaborative work environment, remote internships, and mentor support. Over 400,000 interns have benefited from this platform, improving their skill index and career readiness. We also offer credit courses that provide specialized knowledge and skills in specific fields. These courses can be applied towards degrees or certifications, equipping students with the competencies required for various industry roles. Our impact is significant: we've trained 10,000+ students, collaborated with 50+ industry partners, and achieved a successful placement rate of 85% for program participants. We've also contributed to curriculum redesign at the state level, ensuring academic programs align with industry needs. Our focus areas include high-demand technologies like IoT, Data Science, and Artificial Intelligence. SmartBridge is committed to fostering strong industry-academia connections and providing students with the tools they need to succeed in the evolving job market",
  },
  {
    id: 7,
    name: "Trailblazex",
    tier: "Bronze",
    logo: "https://www.witdreamin.com/tbx.png",
    description:
      "Trailblazex, your digital transformation partner, empowers businesses with cutting-edge technology solutions. Specializing in Salesforce services, Cloud solutions, Mobile Technology, and personalized customer experiences, we drive growth and efficiency. From Marketing Cloud Engagement and Data Cloud to Pardot, Marketing Cloud Personalization, and Intelligence, we deliver innovative strategies. Our expertise extends to Salesforce Sales &amp; Service Cloud, Open Source Development, and Digital Studio solutions, keeping your business ahead in today’s fast- moving digital world.",
  },
  {
    id: 8,
    name: "BrinkView",
    tier: "Bronze",
    logo: "https://brinkview.com/wp-content/uploads/2024/01/BV-Logo-1024x483.png",
    description:
      "Brinkview is a design-driven interdisciplinary consultancy headquartered in Pune with a mix bag of remote and in-house workforce comprised of employees and contractors. We have strong fundamentals in design thinking and mapping with in-house training programmes. Our leadership team has years of experience in training in their areas of expertise. Our combined decades of experience serving a wide range of industries and wide sector agnostic skillset empowers our clients to build solutions in almost any human-centric context.",
  },
  {
    id: 9,
    name: "PCS Global",
    tier: "NextGen",
    logo: "https://www.witdreamin.com/PCSglobal.png",
    description:
      "",
  },
  {
    id: 10,
    name: "Perigeon",
    tier: "NextGen",
    logo: "https://witblogpic.s3.amazonaws.com/1727465254366-2ea7f7b2-7bd0-4ec0-8077-4c4d35324d01.jpeg",
    description:
      "",
  },
  {
    id: 12,
    name: "Copado",
    tier: "Wifi",
    logo: "https://www.witdreamin.com/copado.png",
    description:
      "Transform your Salesforce development journey with Copado, the premier DevOps platform that turbocharges innovation and ensures flawless releases. Elevate Your DevOps Game with AI-Driven Version Control, Seamless Automated Testing & Deployments, Smart Conflict Resolution, Bulletproof Compliance Tools & Cutting-Edge Value Stream Management Copado provides - Slash Development Time, Skyrocket Release Quality, Effortless Regulatory Compliance, Unify Teams, Amplify Results, Accelerate Feature Delivery Level Up with Copado Academy and tap into our DevOps Exchange for game-changing solutions. Join a thriving community of 1,000+ certified DevOps pros, backed by global support and events. From agile startups to industry titans, Copado is your catalyst for DevOps excellence.",
  },
  {
    id: 13,
    name: "Cyntexa",
    tier: "Photography",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUq2lofwjYFAyLCBp1AO9ekt2MEpCoAXXDw&s",
    description:
      " Welcome to Cyntexa, your trusted partner in unlocking the full potential of Salesforce! As experts in Salesforce solutions, we deliver seamless implementations and customizations to ensure your CRM operates at peak performance. With Cyntexa, you can streamline your business processes and elevate customer experiences effortlessly. What makes us stand out? We’re more than just a leading Salesforce consulting company—we’re a dynamic community that thrives on innovation, collaboration, and inclusivity. Our commitment to nurturing talent and delivering excellence makes us the ideal partner for your Salesforce transformation journey.",
  },
  {
    id: 14,
    name: "Community Connect",
    tier: "Community Partners",
    logo: "https://placehold.co/1600x900.png",
    description:
      "",
  },
  {
    id: 15,
    name: "After Party Inc.",
    tier: "After Party",
    logo: "https://placehold.co/1600x900.png",
    description:
      "",
  },
  {
    id: 16,
    name: "Creatique Technologies",
    tier: "NextGen",
    logo: "https://creatiquetech.com/wp-content/uploads/2023/05/final-logo.png",
    description:
      "",
  },
  {
    id: 17,
    name: "Creatique Technologies",
    tier: "NextGen",
    logo: "https://agilecloudconsulting.com/wp-content/uploads/2024/03/Horizontal-Logo-Blue-1-1-768x244.png",
    description:
      "",
  },
];

// Define gradients and text colors for each tier
const tierStyles = {
  Platinum: {
    gradient: "bg-transperant",
    textColor: "text-gray-100",
  },
  Gold: {
    gradient: "bg-transperant",
    textColor: "text-gray-100",
  },
  Silver: {
    gradient: "bg-transperant",
    textColor: "text-gray-200",
  },
  Bronze: {
    gradient: "bg-transperant",
    textColor: "text-red-100",
  },
  NextGen: {
    gradient: "bg-transperant",
    textColor: "text-white",
  },
  Wifi: {
    gradient: "bg-transperant",
    textColor: "text-gray-100",
  },
  Photography: {
    gradient: "bg-transperant",
    textColor: "text-white",
  },
  "Community Partners": {
    gradient: "bg-transperant",
    textColor: "text-white",
  },
  "After Party": {
    gradient: "bg-transperant",
    textColor: "text-gray-800",
  },
  "Learning Partner": {
    gradient: "bg-transperant",
    textColor: "text-gray-800",
  },
};

// Function to get the tier rank based on the desired hierarchy
const getTierRank = (tier) => {
  switch (tier) {
    case "Platinum":
      return 1;
    case "Gold":
      return 2;
    case "Silver":
      return 3;
    case "Bronze":
      return 4;
    case "Wifi":
      return 5;
    case "NextGen":
      return 6;
    case "Photography":
      return 7;
    case "Community Partners":
      return 8;
    case "After Party":
      return 9;
    case "Learning Partner":
      return 2.5;
    default:
      return 11; // For any undefined tiers
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }, // Exit animation
};

const Sponsors = () => {
  // Sort sponsors by tier rank
  const sortedSponsors = [...sponsors].sort(
    (a, b) => getTierRank(a.tier) - getTierRank(b.tier)
  );

  // Group sponsors by tier
  const groupedSponsors = sortedSponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (sponsor) => {
    setDescription(sponsor.description || "No description available.");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              className="bg-white outline-blue-700 border-blue-700 border-6 rounded-lg shadow-6xl w-11/12 max-w-md p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <p className="text-center">{description}</p>
              </div>
              <div className="flex justify-center">
                <button
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        className="max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {[
          "Platinum",
          "Gold",
          "Learning Partner",
          "Silver",
          "Bronze",
          "Wifi",
          "NextGen",
          "Photography",
          "Community Partners",
          "After Party",
        ].map((tier) => (
          <div key={tier} className="mb-10">
            <h2 className="text-3xl font-extrabold underline text-center text-emerald-600 mb-6">
              {tier}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {groupedSponsors[tier]?.map((sponsor) => (
                <motion.div
                  onClick={() => openModal(sponsor)}
                  key={sponsor.id}
                  className={`${
                    tierStyles[sponsor.tier]?.gradient
                  } rounded-lg shadow-2xl p-6 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 flex flex-col items-center`}
                  variants={item}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }} // Exit transition
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="w-[80vw] h-24 mb-4 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Sponsors;
