import Icons from "../assets/sprite.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  id: string;
}

export const Icon = ({ id, ...rest }: IconProps) => {
  return (
    <svg {...rest}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};
