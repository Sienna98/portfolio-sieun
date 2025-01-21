"use client";

import { ExperienceList } from "@/data/experienceData";
import Image from "next/image";
import { useState } from "react";

const ExperiencePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <article className="px-5 pb-5 mb-[60px] md:mb-8 md:px-8 md:pb-8 min-w-[375px]">
      {ExperienceList.map((experience, idx) => (
        <div
          className={`block py-14 md:flex gap-3 ${
            idx !== ExperienceList.length - 1 ? "border-b" : ""
          }`}
          key={idx}
        >
          <div className="mb-10 w-full md:mb-0 md:w-1/5 min-w-[150px] flex flex-col gap-1">
            <div className="font-bold text-2xl md:text-xl">
              {experience.title}
            </div>
            <div className="text-[#969696] text-md">{experience.date}</div>
            <div className="text-sm">{experience.team}</div>
          </div>
          <div className="w-full flex flex-col gap-12 md:w-4/5">
            {experience.contents.map((experience, idx) => (
              <div className="flex flex-col gap-1 md:gap-2" key={idx}>
                <div>
                  <h3 className="font-semibold text-lg">{experience.title}</h3>
                  <span className="text-[#969696] text-sm">
                    {experience.date}
                  </span>
                </div>

                <div className="mt-2 md:pl-2">
                  <ul className="flex flex-col gap-5">
                    {experience.list.map((contents, idx) => (
                      <li key={idx} className="flex flex-col">
                        {"subTitle" in contents &&
                          (contents.subTitle === "이슈 해결하기" ? (
                            <div
                              className="flex items-center gap-1"
                              onClick={handleOpen}
                              role="button"
                            >
                              <h4 className="font-semibold text-sm">
                                {contents.subTitle}
                              </h4>
                              <img
                                src="/icons/arrow-down.svg"
                                alt="펼치기"
                                width={20}
                                height={20}
                                className={`${
                                  isOpen
                                    ? "transform rotate-180 transition"
                                    : "transform rotate-0 transition"
                                }`}
                              />
                            </div>
                          ) : (
                            <h4 className="font-semibold text-sm">
                              {contents.subTitle}
                            </h4>
                          ))}
                        <ul
                          className={`flex flex-col gap-2 ${
                            "subTitle" in contents &&
                            contents.subTitle === "이슈 해결하기"
                              ? isOpen
                                ? "max-h-[1000px] overflow-hidden transition-all duration-500 ease-in-out"
                                : "max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
                              : ""
                          }`}
                        >
                          {contents.contents.map((content, idx) => (
                            <li
                              key={idx}
                              className={`before:content-['-'] before:pr-1.5 text-sm flex whitespace-pre-wrap break-keep ${
                                idx === 0 ? "pt-2" : ""
                              }`}
                            >
                              {content}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  {experience.images &&
                    experience.images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        loading="eager"
                        priority
                        className="pt-6"
                      />
                    ))}
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {experience.skills?.map((skill, idx) => (
                      <li
                        className="inline-block bg-[#58CE8F] text-white rounded-md px-2 py-1 text-sm"
                        key={idx}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
};

export default ExperiencePage;
