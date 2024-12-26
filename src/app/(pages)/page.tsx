"use client";

import Box from "@/components/Box";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative h-[100vh] min-w-[1000px] min-h-[650px] p-[5vh] overflow-x-hidden">
      <ul className="flex w-full h-full">
        <li className="left w-1/2 h-full bg-[#58CE8F]"></li>
        <li className="right w-1/2 h-full bg-[#FBFBFB]"></li>
      </ul>
      <Box className="text-[11.5rem] absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 leading-none select-none flex items-end w-auto">
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="font-extrabold">SIEUN</div>
          <div className="font-semibold">PORTFOLIO</div>
        </motion.h1>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 0, ease: "easeInOut" }}
          className="bg-[#58CE8F] w-[50px] h-[50px] rounded-full"
        />
      </Box>
    </div>
  );
};

export default Home;
