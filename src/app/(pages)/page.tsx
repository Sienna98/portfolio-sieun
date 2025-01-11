"use client";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative h-[100vh] min-w-[375px] overflow-x-hidden p-[15px] md:p-[30px] lg:p-[5vh] figTree">
      <div className="block md:flex w-full h-full">
        <div className="w-full h-1/2 md:left md:w-1/2 md:h-full bg-[#58CE8F]"></div>
        <div className="w-full h-1/2 md:right md:w-1/2 md:h-full bg-[#FBFBFB]"></div>
      </div>
      <div className="text-[11.5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-none select-none flex items-end w-auto gap-2">
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="font-extrabold text-[40px] md:text-[80px] lg:text-[180px]">
            SIEUN
          </div>
          <div className="font-semibold text-[40px] md:text-[80px] lg:text-[160px]">
            PORTFOLIO
          </div>
        </motion.h1>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 0, ease: "easeInOut" }}
          className="bg-[#58CE8F] rounded-full w-[20px] h-[20px] mb-[5px] md:w-[30px] md:h-[30px] md:mb-[10px] lg:w-[50px] lg:h-[50px] lg:mb-[20px]"
        />
      </div>
    </div>
  );
};

export default Home;
