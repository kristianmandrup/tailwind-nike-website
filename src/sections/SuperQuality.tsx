import React from "react";
import { Button } from "../components";
import { shoe8 } from "../assets/images";

export const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          We Provide You
          <span className=" text-coral-red"> Super </span>
          <span className=" text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>
        <div className="mt-11">
          <Button label="View details"></Button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <img
          src={shoe8}
          alt="Shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
