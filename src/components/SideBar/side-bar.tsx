const menuList = [
  {
    category: "UI-component",
    list: [
      "Alert",
      "Button",
      "Card",
      "Checkbox",
      "Confirm",
      "Input",
      "Modal",
      "Progress",
      "Selector",
      "Table",
    ],
  },
  { category: "Clone Coding", list: ["Starbucks", "Movv", "농심 nav"] },
  {
    category: "Portfolio",
    list: ["Login Page", "Tiffany & Co.", "BARBOUR", "NARS", "SHAFT FINDER"],
  },
];

const SideBar = () => {
  return (
    <aside className="w-56 h-[100vh] shadow-md z-10">
      {menuList.map((menu, idx) => (
        <div key={idx} className="border-b border-gray-200 py-5">
          <div className="px-5 leading-5">
            <h2 className="text-[0.75rem] font-semibold text-green-500">
              {menu.category}
            </h2>
            <ul className="mt-2">
              {menu.list.map((item, idx) => (
                <li
                  key={idx}
                  className="transition-all duration-400 cursor-pointer pt-1.5 duration-300 transform hover:translate-x-1.5 hover:font-semibold"
                  data-cont="alert.html"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="icon_menu">
        <ul className="mt-2">
          <li data-cont="landing_page.html">
            <span className="material-icons">home</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
