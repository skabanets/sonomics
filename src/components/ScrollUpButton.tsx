import { Icon } from "../components";

export const ScrollUpButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      type="button"
      className="flex size-[40px] items-center justify-center rounded-full border border-whiteTextColor bg-darkBgColor p-[10px] transition-all duration-300 hover:border-accentYellowColor focus-visible:border-accentYellowColor"
      onClick={handleClick}
    >
      <Icon
        id="arrow-right"
        className="size-[15px] rotate-[-90deg] fill-whiteTextColor transition group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"
      />
    </button>
  );
};
