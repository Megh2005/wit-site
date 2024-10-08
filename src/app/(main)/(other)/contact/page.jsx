"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqazvpyl");
  const formRef = useRef(null);

  if (state.succeeded) {
    toast.success("Your Query Has Reached Our Mail Box!");
    formRef.current.reset();
  }

  return (
    <div>
      <motion.div
        className="min-h-screen flex items-center justify-center px-6 py-12"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 10, ease: "linear", loop: Infinity }}
        style={{
          backgroundImage: "linear-gradient(to right, #f9e3a0, #f8b738)",
        }}
      >
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">
            Report Glitch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            ref={formRef}
            action="https://formspree.io/f/mqazvpyl"
            method="POST"
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
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
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
                htmlFor="role"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                className="w-full text-black px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                defaultValue="role"
              >
                <option value="role" disabled>
                  Select your role
                </option>
                {/* <option value="role">Select Your Role</option> */}
                <option value="attendee">Attendee</option>
                <option value="sponsor">Sponsor</option>
              </select>
              <ValidationError
                prefix="Role"
                field="role"
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
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
