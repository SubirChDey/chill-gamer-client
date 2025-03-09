import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      
      <section id="contact-form-section" className="w-8/12 mx-auto bg-black text-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 mt-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>

      <div className="lg:w-10/12 mx-auto bg-gray-100 p-8 rounded-lg shadow-md text-center items-center">
          <h2 className="text-3xl font-bold mb-6">Our Address</h2>
          <p>Chill Gamer – Where Every Game Gets the Review It Deserves. Dive into honest, in-depth reviews <br /> that keep you ahead of the game. Your next gaming adventure starts here!</p>
          <p className="text-lg mt-4">
            <span className='font-bold'>Address:</span> <br />
            1234 Example Street, Suite 5678 <br />
            City, Country, 12345 <br />
            <span className='font-bold'>Phone:</span> +1 (234) 567-8900 <br />
            <span className='font-bold'>Email:</span> <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
          </p>
        </div>
      
      <section id="address-map-section" className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12">
              
        
        <div id="map" className=" w-full mx-auto h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8913660740877!2d-74.00601548459461!3d40.71277677933044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1d5ff2abef%3A0x8c9fc0d71f01f00f!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1615254122764!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
