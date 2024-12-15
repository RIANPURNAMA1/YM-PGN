import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div className="container mx-auto py-10"  id="contact">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Formulir Kontak */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="  bg-yellow-500 hover:bg-yellow-400 text-white font-semibold p-2 rounded"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>

        {/* Peta */}
        <div className="bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold p-4">Our Location</h3>
          <div className="h-64">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b3%3A0x5045675218ceed30!2sYour%20Location!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}