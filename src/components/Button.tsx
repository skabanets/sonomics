import { Icon } from "../components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: string;
}

export const Button = ({ label, width = "w-[170px]", ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`relative z-10 flex h-[47px] ${width} items-center justify-center gap-[10px] rounded-[90px] bg-accentRedColor px-[23px] py-[10px] text-[18px] font-medium leading-[1.5] text-whiteTextColor outline-none transition hover:bg-accentOrangeColor focus-visible:bg-accentOrangeColor`}
      {...rest}
    >
      {label}
      <Icon id="arrow-button" className="size-[15px] fill-whiteTextColor" />
    </button>
  );
};
