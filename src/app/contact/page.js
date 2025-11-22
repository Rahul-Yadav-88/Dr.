import React from 'react';

export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto py-16 px-4">
      {/* Left: Form */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Get in <span className="text-slate-700">Touch</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel,
          ornare non id blandit netus.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name *"
            className="w-full border border-gray-200 rounded-md p-3 focus:outline-none focus:ring"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 rounded-md p-3 focus:outline-none focus:ring"
          />
          <input
            type="tel"
            placeholder="Phone number *"
            className="w-full border border-gray-200 rounded-md p-3 focus:outline-none focus:ring"
          />

          <select className="w-full border border-gray-200 rounded-md p-3 text-gray-600 focus:outline-none focus:ring">
            <option>How did you find us?</option>
            <option>Google</option>
            <option>Social Media</option>
            <option>Friend or Family</option>
          </select>

          <button className="w-full bg-[#2E424D] text-white py-3  font-semibold">
            SEND
          </button>
        </form>

        {/* Contact Icons */}
        <div className="flex items-center gap-10 mt-10 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span><img src="/contact1.png" alt="" className='w-6'/></span>
            <div>
              <p className="font-semibold">Phone</p>
              <p>8001999</p>
            </div>
          </div>

          {/* <div className="flex items-center gap-2">
              <span><img src="/contact2.png" alt="" className='w-6'/></span>
            <div>
              <p className="font-semibold">Fax</p>
              <p>03 5432 1234</p>
            </div>
          </div> */}

          <div className="flex items-center gap-2">
             <span><img src="/contact3.png" alt="" className='w-6'/></span>
            <div>
              <p className="font-semibold">Email</p>
              <p>Gaurav.jadon@mediclinic.ae</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Real Map */}
      <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Clinic Map"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9270839999997!2d106.8219!3d-6.1862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5bf409!2sKebon%20Kacang!5e0!3m2!1sen!2sid!4v1700000000000">
        </iframe>
      </div>
    </div>
  );
}
