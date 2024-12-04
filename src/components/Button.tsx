interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: string;
}

export const Button = ({ label, width = "169", ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ width: `${width}px` }}
      className="h-[47px] rounded-[90px] bg-accentRedColor px-[25px] py-[10px] text-[18px] font-medium leading-[1.5] text-whiteTextColor"
      {...rest}
    >
      {label}
    </button>
  );
};
