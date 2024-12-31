"use client";

import { motion } from "framer-motion";

const AlertPage = () => {
  return (
    <article className="flex flex-col gap-5">
      <div className="text-xl font-bold">Alert</div>
      <div className="flex flex-col gap-3">
        <button className="block w-36 h-12 text-sm font-medium text-[#58CE8F] bg-white border border-[#58CE8F] rounded-md transition duration-500 cursor-pointer hover:bg-[#58CE8F] hover:text-white">
          Alert-1
        </button>
        <button className="block w-36 h-12 text-sm font-medium text-[#58CE8F] bg-white border border-[#58CE8F] rounded-md transition duration-500 cursor-pointer hover:bg-[#58CE8F] hover:text-white">
          Alert-2
        </button>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[350px] p-5">
        <motion.div
          className={`flex justify-between items-center p-3 rounded-md text-white text-md mb-2`}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p>알럿 메세지</p>
          <span className="cursor-pointer">&times;</span>
        </motion.div>
      </div>
    </article>
  );
};

export default AlertPage;
