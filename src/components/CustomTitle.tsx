import { Icon } from "../components";

interface CustomTitleProps {
  type: "h3" | "h4" | "h5";
  wrapperStyles: string;
  iconColor?: string;
  titleStyles?: string;
  text?: string;
}

export const CustomTitle = ({
  type,
  wrapperStyles,
  titleStyles,
  iconColor = "fill-mainTextColor",
  text = "View all",
}: CustomTitleProps) => {
  const Tag = type;

  return (
    <div className={wrapperStyles}>
      <Tag className={titleStyles}>{text}</Tag>
      <Icon id="arrow" className={`size-[15px] transition ${iconColor}`} />
    </div>
  );
};
