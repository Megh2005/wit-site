"use client";
const Contact = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">
          Contact Us
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className="w-full px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
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
              id="email"
              className="w-full px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
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
              id="subject"
              className="w-full px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Subject"
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
              className="w-full resize-none px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message"
              rows="6"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
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