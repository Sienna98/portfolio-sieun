import { menuList } from "@/data/sideBarMenuList";
import { usePathname, useRouter } from "next/navigation";

const MobileSideBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <aside className="fixed md:hidden top-0 right-0 w-1/2 h-[100vh] bg-[#FBFBFB] z-50">
      <div>
        {menuList.map((menu, idx) => (
          <div key={idx} className="border-b border-gray-200 p-5">
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
                        } else {
                          window.open(item.link, "_blank");
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
    </aside>
  );
};

export default MobileSideBar;
