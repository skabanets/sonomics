import { Icon } from "../components";

export const ScrollUpButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="group flex size-[40px] items-center justify-center rounded-full border border-whiteTextColor bg-darkBgColor p-[10px] transition hover:border-accentYellowColor focus-visible:border-accentYellowColor"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <Icon
        id="arrow-right"
        className="size-[15px] rotate-[-90deg] fill-whiteTextColor transition group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"
      />
    </button>
  );
};
