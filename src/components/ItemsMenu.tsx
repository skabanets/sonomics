import type { CaseStudyMenuItem, Industry } from "../types";

interface ItemsMenuProps {
  items: Industry[] | CaseStudyMenuItem[];
  currentIndex: number;
  handleMenuClick: (index: number) => void;
  styles?: string;
}

export const ItemsMenu = ({ items, currentIndex, handleMenuClick, styles }: ItemsMenuProps) => {
  return (
    <div className={`bg-secondaryBgColor ${styles}`}>
      <ul className="container flex items-center">
        {items.map((item, index) => (
          <li
            key={index}
            className={`bold-text h-[56px] cursor-pointer border-b-[3px] border-transparent px-[28px] py-[15px] ${
              currentIndex === index
                ? "!border-themeAccentColor bg-navMenuBgColor"
                : "text-secondaryTextColor"
            }`}
            onClick={() => handleMenuClick(index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
