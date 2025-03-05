import type { FunctionalModule } from "../types";

interface FunctionalModuleCardProps {
  module: FunctionalModule;
}

export const FunctionalModuleCard = ({ module }: FunctionalModuleCardProps) => {
  return (
    <div className="flex h-[340px] flex-col gap-[20px] rounded-[10px] border border-solid border-blackBgColor bg-formFieldBgColor p-[30px] md:w-[338px] lg:h-[318px] lg:w-[410px]">
      <h4>{module.moduleName}</h4>
      <ul className="flex flex-col gap-[10px]">
        {module.details.map((text, index) => (
          <li
            key={index}
            className="relative pl-[16px] before:absolute before:left-0 before:top-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-accentYellowColor"
          >
            <p className="small-text">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
