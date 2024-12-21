const SideBar = () => {
  return (
    <section className="w-[230px] h-full shadow-[3px_0px_7px_0px_rgba(0,0,0,0.05)] z-[1]">
      <div className="border-b border-[#E8E8E8] py-5">
        <div className="px-5 leading-[20px]">
          <h2 className="text-[0.8rem] font-bold text-[#01B96B]">
            UI-component
          </h2>
          <ul>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="alert.html"
            >
              <span>Alert</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="button.html"
            >
              <span>Button</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="card.html"
            >
              <span>Card</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="checkbox.html"
            >
              <span>Checkbox</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="confirm.html"
            >
              <span>Confirm</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="input.html"
            >
              <span>Input</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="modal.html"
            >
              <span>Modal</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="progress.html"
            >
              <span>Progress</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="selector.html"
            >
              <span>Selector</span>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="table.html"
            >
              <span>Table</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b border-[#E8E8E8] py-5">
        <div className="px-5 leading-[20px]">
          <h2 className="text-[0.8rem] font-bold text-[#01B96B]">
            Clone Coding
          </h2>
          <ul>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://elegant-begonia-dba8ef.netlify.app/"
                target="_blank"
              >
                <span>Starbucks</span>
              </a>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://unrivaled-longma-60ac49.netlify.app/"
                target="_blank"
              >
                <span>Movv</span>
              </a>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://silver-frangollo-742fe8.netlify.app/"
                target="_blank"
              >
                <span>농심 nav</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b border-[#E8E8E8] py-5">
        <div className="px-5 leading-[20px]">
          <h2 className="text-[0.8rem] font-bold text-[#01B96B]">Portfolio</h2>
          <ul>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://curious-jalebi-47dfad.netlify.app/"
                target="_blank"
              >
                <span>Login Page</span>
              </a>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://effervescent-starburst-f31889.netlify.app/"
                target="_blank"
              >
                <span>Tiffany & Co.</span>
              </a>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://ephemeral-gnome-9c4e5e.netlify.app/"
                target="_blank"
              >
                <span>BARBOUR</span>
              </a>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://cerulean-biscotti-a6f0e2.netlify.app/"
                target="_blank"
              >
                <span>NARS</span>
              </a>
            </li>
            <li
              className="absolute bottom-[10px] left-[10px] cursor-pointer"
              data-cont="landing_page.html"
            >
              <a
                href="https://github.com/Sienna98/shaft-finder"
                target="_blank"
              >
                <span>SHAFT FINDER</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="icon_menu">
        <ul className="list">
          <li data-cont="landing_page.html">
            <span className="material-icons">home</span>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default SideBar;
