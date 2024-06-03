import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea id="message" className="w-full p-2 border rounded" rows={4}></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
