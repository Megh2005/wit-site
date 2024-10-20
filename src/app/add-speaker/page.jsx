"use client";

import BackButton from "@/components/BackButton";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddSpeaker = () => {
  const [speaker, setSpeaker] = useState({
    speaker: "",
    designation: "",
    category: "Keynote",
    imageUrl: "",
    linkedinUrl: "",
    twitterUrl: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const addSpeaker = async (e) => {
    e.preventDefault();

    if (
      !speaker.speaker ||
      !speaker.designation ||
      !speaker.imageUrl ||
      !speaker.linkedinUrl ||
      !speaker.twitterUrl ||
      !speaker.category
    )
      return;

    setSubmitting(true);

    const formData = new FormData();

    formData.append("speaker", speaker.speaker);
    formData.append("designation", speaker.designation);
    formData.append("time", speaker.time);
    formData.append("category", speaker.category);
    formData.append("imageUrl", speaker.imageUrl);
    formData.append("linkedinUrl", speaker.linkedinUrl);
    formData.append("twitterUrl", speaker.twitterUrl);

    try {
      const res = await axios.post("/api/speaker/add", formData);

      if (res.data.success) {
        toast.success("Speaker added successfully");
        setSpeaker({
          speaker: "",
          designation: "",
          time: "",
          imageUrl: "",
          linkedinUrl: "",
          twitterUrl: "",
          category: "Keynote",
        });
      }
    } catch (error) {
      toast.error("Failed to add speaker");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <BackButton />
      <div className="mt-6 flex justify-center min-h-[80vh] items-center px-4">
        <form className="flex flex-col gap-6 border border-gray-400 p-4 rounded-md shadow-xl">
          <div>
            <h1 className="text-center text-xl">Add a new speaker</h1>
          </div>
          <div>
            <input
              value={speaker.speaker}
              onChange={(e) =>
                setSpeaker({ ...speaker, speaker: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="text"
              placeholder="Speaker Name"
            />
          </div>
          <div>
            <select
              value={speaker.category}
              onChange={(e) =>
                setSpeaker({ ...speaker, category: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
            >
              <option value="Keynote">Keynote</option>
              <option value="Panel">Panel</option>
              <option value="Esteemed">Esteemed</option>
            </select>
          </div>
          <div>
            <input
              value={speaker.imageUrl}
              onChange={(e) =>
                setSpeaker({ ...speaker, imageUrl: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="text"
              placeholder="Image Url"
            />
          </div>
          <div>
            <input
              value={speaker.designation}
              onChange={(e) =>
                setSpeaker({ ...speaker, designation: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="text"
              placeholder="Designation"
            />
          </div>
          <div>
            <input
              value={speaker.linkedinUrl}
              onChange={(e) =>
                setSpeaker({ ...speaker, linkedinUrl: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="text"
              placeholder="LinkedIn Url"
            />
          </div>
          <div>
            <input
              value={speaker.twitterUrl}
              onChange={(e) =>
                setSpeaker({ ...speaker, twitterUrl: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="text"
              placeholder="Twitter Url"
            />
          </div>
          <div>
            <button
              disabled={submitting}
              onClick={(e) => addSpeaker(e)}
              className="flex justify-center w-full text-white bg-gradient-to-r cursor-pointer from-teal-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {submitting ? (
                <LoaderCircle className="animate-spin text-white w-6 h-6 mr-2" />
              ) : (
                "Add Speaker"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpeaker;
