import { Divider } from "../../components";

import { sonomicsNumbers } from "../../constants";

export const SonomicsNumbers = () => {
  return (
    <section className="py-[100px]">
      <div className="container flex justify-between">
        <h2 className="w-[300px] pt-[20px]">Sonomics in numbers</h2>
        <ul className="w-[774px]">
          {sonomicsNumbers.map(({ title, number }, index) => (
            <li
              key={index}
              className="flex flex-wrap items-center justify-between gap-y-[28px] pt-[30px] first:pt-0"
            >
              <p className="text-[120px] font-medium leading-[156px] text-accentRedColor">
                {number}+
              </p>
              <h4 className="w-[490px]">{title}</h4>

              {index < sonomicsNumbers.length - 1 && <Divider />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
