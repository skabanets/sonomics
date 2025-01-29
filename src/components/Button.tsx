import { Icon } from "../components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

export const Button = ({ label, className = "w-[170px]", ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`relative flex h-[50px] items-center justify-center gap-[10px] rounded-[90px] bg-accentRedColor px-[23px] py-[10px] text-[18px] font-medium leading-[1.5] text-whiteTextColor outline-none transition hover:bg-accentOrangeColor focus-visible:bg-accentOrangeColor ${className}`}
      {...rest}
    >
      {label}
      <Icon id="arrow-button" className="size-[15px] fill-whiteTextColor" />
    </button>
  );
};
