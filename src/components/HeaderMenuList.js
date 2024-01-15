export default function HeaderMenuList({
  parentMenuClassName = "hidden lg:flex",
  childMenuClassName = "",
  handleBurgerMenuClick
}) {
  const menuList = [
      {
          path: "#about",
          name: "about",
      },
      {
          path: "#experience",
          name: "experience",
      },
      {
          path: "#work",
          name: "work",
      },
      {
          path: "#contact",
          name: "contact",
      },
  ];

  const renderedMenuList = menuList.map((menuItem, index) => {
      return (
          <a
              key={index}
              href={menuItem.path}
              onClick={() => handleBurgerMenuClick()}
              className="__menut-items hover:text-[#fff] capitalize hover:bg-[#373737b4] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform flex items-center justify-center gap-2 p-5 lg:p-1 lg:px-2 px-5 rounded"
          >
              <span className="text-[#efefef]"> 0{index + 1}. </span> {menuItem.name}
          </a>
      );
  });

  return (
      <div
          className={`__menu font-mono transition duration-300 ${parentMenuClassName}`}
      >
          <div
              className={`__menu_inner lg:gap-[20px] md:flex items-center ${childMenuClassName}`}
          >
              {renderedMenuList}
              <a
                  href="/files/CV - FEDIMAR KAYL RABANZO.pdf"
                  target="_blank"
                  className="text-center border rounded shadow__btn font-normal w-1/4 lg:w-full border-gray-300 hover:border-white hover:text-white py-3 lg:py-2 px-[1rem] text-[13px]"
              >
                  Resume
              </a>
          </div>
      </div>
  );
}
