import { menuList } from "@/data/sideBarMenuList";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface IMobileSideBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen?: (value: boolean) => void;
}

const MobileSideBar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: IMobileSideBarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const currentDate = new Date();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isSidebarOpen ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-1/2 max-w-[300px] min-w-[190px] h-full bg-white shadow-lg z-20 flex flex-col"
    >
      <div className="overflow-y-auto h-full flex flex-col justify-between">
        <div>
          {menuList.map((menu, idx) => (
            <div
              key={idx}
              className={`p-5 ${
                idx !== menuList.length - 1
                  ? "border-b border-gray-200"
                  : "pb-12"
              }`}
            >
              <div className="leading-5">
                <h2 className="text-[0.75rem] font-medium text-green-500">
                  {menu.category}
                </h2>
                <ul className="mt-3 flex flex-col gap-1.5 items-start">
                  {menu.list.map((item, idx) => (
                    <li
                      key={idx}
                      className={`relative group inline cursor-pointer flex-shrink-0 flex-grow-0 basis-auto w-auto transition-transform duration-500 ease-in-out hover:translate-x-[5px] hover:font-semibold 
                                ${
                                  pathName === item.link &&
                                  "translate-x-[5px] font-semibold"
                                }`}
                    >
                      <h3
                        className="relative z-10 transition-all duration-300 transform"
                        onClick={() => {
                          if (item.type === "router") {
                            router.push(item.link);
                            setIsSidebarOpen?.(false);
                          } else {
                            window.open(item.link, "_blank");
                            setIsSidebarOpen?.(false);
                          }
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        className={`absolute bottom-[-2px] left-0 w-0 h-[10px] bg-[#A6F0C9] transition-all duration-500 group-hover:w-full`}
                      />
                      {pathName === item.link && (
                        <span
                          className={`absolute bottom-[-2px] left-0 h-[10px] bg-[#A6F0C9] transition-all duration-500 w-full`}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[10px] text-gray-400 px-5 pb-4">
          © {currentDate.getFullYear()} SIEUN PORTFOLIO
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSideBar;
