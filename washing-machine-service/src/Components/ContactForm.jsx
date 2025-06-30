import React from 'react';

const ContactForm = () => {
    return (
      <div>
        <div id="contact" className="py-16 px-4 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
            <button className="btn btn-primary w-full">Send</button>
          </form>
        </div>
      </div>
    );
};

export default ContactForm;