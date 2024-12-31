"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const AlertPage = () => {
  interface IAlertProps {
    id: number;
    status: string;
    className: string;
    message: string;
  }

  const [alerts, setAlerts] = useState<IAlertProps[]>([]);

  const createAlert = (status: string) => {
    const newAlert = {
      id: Date.now() + Math.random(),
      status: status,
      className: status === "success" ? "bg-[#01B96B]" : "bg-[#FF5E5E]",
      message:
        status === "success" ? "Success alert 입니다." : "Error alert 입니다.",
    };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

    setTimeout(() => {
      setAlerts((prevAlerts) =>
        prevAlerts.filter((alert) => alert.id !== newAlert.id)
      );
    }, 2500);
  };

  return (
    <article className="flex flex-col gap-5">
      <div className="text-xl font-bold">Alert</div>
      <div className="flex flex-col gap-3">
        <button
          className="block w-36 h-12 text-sm font-medium text-[#58CE8F] bg-white border border-[#58CE8F] rounded-md transition duration-500 cursor-pointer hover:bg-[#58CE8F] hover:text-white"
          onClick={() => createAlert("success")}
        >
          Success
        </button>
        <button
          className="block w-36 h-12 text-sm font-medium text-[#58CE8F] bg-white border border-[#58CE8F] rounded-md transition duration-500 cursor-pointer hover:bg-[#58CE8F] hover:text-white"
          onClick={() => createAlert("error")}
        >
          Error
        </button>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[350px] p-5">
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            className={`${alert.className} flex justify-between items-center p-3 rounded-md text-white text-md mb-2`}
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p>{alert.message}</p>
            <span
              className="cursor-pointer"
              onClick={() => setAlerts(alerts.filter((a) => a.id !== alert.id))}
            >
              &times;
            </span>
          </motion.div>
        ))}
      </div>
    </article>
  );
};

export default AlertPage;
