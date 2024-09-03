import React from "react";
import { services } from "../constants";
import { ServiceCard } from "../components";

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-wrap justify-center max-container gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};
