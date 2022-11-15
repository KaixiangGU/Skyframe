import React from "react";

const locations = [
  { title: "Vancouver", image: "./images/locations/Vancouver.jpg" },
  { title: "Shanghai", image: "./images/locations/Shanghai.jpg" },
  { title: "IceLand", image: "./images/locations/IceLand.jpg" },
  { title: "Australia", image: "./images/locations/Australia.jpg" },
];

const Locations = () => {
  return (
    <section className="p-4">
      <h2 className="">Popular Locations</h2>
      <div className="flex overflow-x-auto gap-x-4 pb-4">
        {locations.map((location) => (
          <div className="shrink-0">
            <img
              src={location.image}
              alt={`${location.title} aerial footage`}
              className="w-60 h-40 object-cover rounded-md"
            />
            <h3 className="py-2">{location.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
