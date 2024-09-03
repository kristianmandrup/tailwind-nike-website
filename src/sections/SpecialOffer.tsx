import React from "react";
import { offer } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";

export const SpecialOffer = () => {
  return (
    <section className="flex items-center gap-10 justify-wrap max-xl:flex-col-reverse max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className=" text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconUrl={arrowRight}></Button>
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
};
