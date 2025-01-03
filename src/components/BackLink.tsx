import { Link, LinkProps } from "react-router-dom";

interface BackLinkProps extends LinkProps {
  label: string;
}

export const BackLink = ({ label, ...rest }: BackLinkProps) => {
  return (
    <Link {...rest}>
      <h6>{label}</h6>
    </Link>
  );
};
