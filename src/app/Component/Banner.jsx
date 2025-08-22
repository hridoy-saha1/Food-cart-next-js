"use client";

import React from "react";

export default function Banner() {
  return (
    <div className="relative mb-8 rounded-xl overflow-hidden shadow-md">
      {/* Banner Image */}
      <img
        src="https://i.ibb.co/h1sC4TFN/img81389-whqc-660x440q80.jpg"
        alt="Delicious Bangladeshi Food"
        className="w-full h-[300px] md:h-[400px] object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl md:text-4xl font-bold">
        Delicious Bangladeshi Food
      </div>
    </div>
  );
}
