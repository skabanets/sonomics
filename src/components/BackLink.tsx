import { Link, LinkProps } from "react-router-dom";

interface BackLinkProps extends LinkProps {
  label: string;
  className?: string;
}

export const BackLink = ({ label, className = "", ...rest }: BackLinkProps) => {
  return (
    <Link
      {...rest}
      className={`inline-block text-secondaryTextColor hover:text-themeAccentColor focus-visible:text-themeAccentColor ${className}`}
    >
      <h6 className="border-b-[1.5px] border-b-current leading-[20px]">{label}</h6>
    </Link>
  );
};
