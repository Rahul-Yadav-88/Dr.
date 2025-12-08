import React from "react";


const Section7 = () => {
    const brandLogos = [
  { id: 1, image: "/brand.png" },
  { id: 2, image: "/brand2.png" },
  { id: 3, image: "/brand3.png" },
  { id: 4, image: "/brand5.png" },
  { id: 5, image: "/brand5.png" },
];
  return (
    <div className="w-full bg-[#D9D9D9] py-20  px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center">

        {brandLogos.map((logo) => (
          <div key={logo.id} className="opacity-70 hover:opacity-100 transition">
            <img
              src={logo.image}
              alt="Brand Logo"
              className="w-40 md:w-48 object-contain"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Section7;
