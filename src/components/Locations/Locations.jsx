import React from "react";

const locations = [
  { title: "Vancouver", image: "./images/locations/Vancouver.jpg" },
  { title: "Shanghai", image: "./images/locations/Shanghai.jpg" },
  { title: "IceLand", image: "./images/locations/IceLand.jpg" },
  { title: "Australia", image: "./images/locations/Australia.jpg" },
];

const Locations = () => {
  return (
    <section className="mx-auto mb-6 px-4 lg:max-w-[90%] xl:max-w-[75%]">
      <h2 className="py-3 text-xl font-semibold">Popular Locations</h2>
      <div className="flex gap-x-4 overflow-x-auto pb-2 ">
        {locations.map((location) => (
          <div>
            <div className="h-32 w-60">
              <img
                src={location.image}
                alt={`${location.title} aerial footage`}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <h3 className="py-2">{location.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
