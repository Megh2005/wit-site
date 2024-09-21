"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqazvpyl");
  const formRef = useRef(null);
  if (state.succeeded) {
    toast.success("Your Query Has Reached Our Mail Box!");
    formRef.current.reset();
  }
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">
          Rapid Response Force
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          ref={formRef}
        >
          <div className="mb-4">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              name="name"
              className="w-full text-black bg-white px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-white text-black px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="md:col-span-2 mb-4">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              required
              id="subject"
              className="w-full px-4 bg-white text-black py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="md:col-span-2 mb-4">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              className="w-full resize-none px-4 py-3 border bg-white text-black border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message"
              name="message"
              rows="6"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
