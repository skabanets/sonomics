import { images } from "../../assets";

export const OurMission = () => {
  const { commonImages } = images;
  return (
    <section>
      <div className="mx-auto flex max-w-[1440px]">
        <img
          srcSet={`${commonImages.our_mission_1x} 1x, ${commonImages.our_mission_2x} 2x`}
          src={commonImages.our_mission_1x}
          alt="Illustration of city skyscrapers"
          width="720"
          height="600"
          className="w-1/2 object-cover"
        />
        <div className="bg-ourMisionBgColor flex w-1/2 flex-col justify-center pl-[70px] pr-[150px] transition">
          <h2 className="mb-[24px] text-whiteTextColor">Our mission</h2>
          <h4 className="mb-[20px] text-accentYellowColor">End-to-End Application Development</h4>
          <p className="big-text text-whiteTextColor">
            Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod. Ut enim ad minim veniam, quis nostrud. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Ut enim ad minim veniam,
            quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>
      </div>
    </section>
  );
};
