"use client";

import { AboutMeDataEn } from "@/data/en/about-me-data";
import { AboutMeDataKo } from "@/data/ko/about-me-data";
import { commonMotion, staggerMotion } from "@/motions/common-motions";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const AboutMePage = () => {
  const searchParams = useSearchParams();
  const currentLang = searchParams.get("lang") || "ko";

  return (
    <article className="lg:p-8 min-w-[375px] w-full lg:h-full flex justify-center items-center">
      <motion.div
        className="bg-white w-full md:w-[768px] flex flex-col justify-center items-center px-7 py-10 mb-[100px] md:mb-[0px] md:px-10 md:py-10 lg:shadow-lg gap-8 text-center"
        variants={staggerMotion}
        initial="start"
        whileInView="end"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerMotion}>
          <img
            src="/images/sieun-profile.jpg"
            alt="profile"
            width="200"
            height="200"
          />
        </motion.div>
        {(currentLang === "ko" ? AboutMeDataKo : AboutMeDataEn).map(
          (data, idx) => (
            <motion.p
              variants={commonMotion}
              className="whitespace-pre-wrap break-keep text-sm leading-6"
              key={idx}
            >
              {data.content}
            </motion.p>
          )
        )}
      </motion.div>
    </article>
  );
};

export default AboutMePage;
function useQueryParams() {
  throw new Error("Function not implemented.");
}
