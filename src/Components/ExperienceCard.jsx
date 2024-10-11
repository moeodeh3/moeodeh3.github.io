import React, { useState, createRef } from 'react';
import { cardInfo } from '../Constants/constants';

export default function ExperienceCard() {
  const imgRef = createRef();

  function GetDescBullets({ descBullets }) {
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className="text-gray-300 list-disc list-inside"
        >
          {item}
        </li>
      ))
      : null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 bg-gray-900 text-white">
      {cardInfo.map((info, index) => (
        <div
          key={index}
          className="experience-card w-full sm:w-[350px] lg:w-[450px] shadow-lg rounded-xl overflow-hidden bg-[#200c34] text-white border border-[#665a72]"
        >
          {/* Header with dynamic background color */}
          <div
            className="relative experience-banner flex flex-col items-center py-8"
            style={{ backgroundColor: info.backgroundColor }} // Dynamic background color
          >
            <h5 className="experience-text-company text-white font-bold text-3xl pb-4">
              {info.company}
            </h5>

            {/* Logo */}
            <img
              crossOrigin="anonymous"
              ref={imgRef}
              className="experience-roundedimg h-24 w-24 rounded-full bg-white shadow-lg absolute mt-10"
              src={info.companylogo}
              alt={info.company}
            />
          </div>

          {/* Card Body (Text Details) */}
          <div className="experience-text-details px-4 pt-16 pb-4">
            <h5 className="text-lg font-semibold experience-text-role">
              {info.role}
            </h5>
            <h6 className="text-sm text-gray-400 mb-2 experience-text-date">
              {info.date}
            </h6>
            <ul>
              <GetDescBullets descBullets={info.descBullets} />
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
