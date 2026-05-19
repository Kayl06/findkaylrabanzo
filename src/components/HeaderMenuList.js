import { NAV_LINKS, SITE } from "@/data/site";

export default function HeaderMenuList({
  parentMenuClassName = "hidden lg:flex",
  childMenuClassName = "",
  handleBurgerMenuClick,
  menuRef,
}) {
  return (
    <nav
      ref={menuRef}
      id="mobile-menu"
      aria-label="Primary"
      className={`__menu font-mono transition duration-300 ${parentMenuClassName}`}
    >
      <div
        className={`__menu_inner lg:gap-[20px] md:flex items-start ${childMenuClassName}`}
      >
        {NAV_LINKS.map((menuItem, index) => (
          <a
            key={menuItem.path}
            href={menuItem.path}
            onClick={handleBurgerMenuClick}
            className="__menut-items hover:text-[#fff] capitalize hover:bg-[#373737b4] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform flex items-center justify-center gap-2 p-5 lg:p-1 lg:px-2 px-0 rounded"
          >
            <span className="text-[#efefef]">0{index + 1}.</span> {menuItem.name}
          </a>
        ))}
        <a
          href={SITE.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBurgerMenuClick}
          className="text-center border rounded shadow__btn font-normal w-1/2 lg:w-full border-gray-300 hover:border-white hover:text-white py-3 lg:py-2 px-[1rem] text-[13px]"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
