import { Icon, TeamMemberCard } from "../../components";

import { images } from "../../assets";
import { teamMembers } from "../../constants";
import { TeamMember } from "../../types";

export const Team = () => {
  const { teamImages } = images;
  return (
    <section className="relative bg-blackBgColor pb-[100px] pt-[80px] before:absolute before:left-0 before:top-[624px] before:h-[1px] before:w-full before:bg-whiteTextColor before:content-['''']">
      <div className="container">
        <div className="relative mb-[80px] flex items-center gap-[230px]">
          <img
            srcSet={`${teamImages.ceo_1x} 1x, ${teamImages.ceo_2x} 2x`}
            src={teamImages.ceo_1x}
            alt="Alexey Chuhaiov"
            width="555"
            height="464"
            loading="lazy"
            className="rounded-[20px]"
          />
          <div className="w-[456px]">
            <h2 className="mb-[14px] text-whiteTextColor">Alexey Chuhaiov</h2>
            <h5 className="mb-[20px] text-whiteTextColor">CEO at Sonomics</h5>
            <p className="big-text mb-[20px] text-secondaryLightTextColor">
              Our team of talented professionals, with their diverse skill sets and unwavering
              commitment to excellence, is the driving force behind our success.
            </p>
            <p className="big-text text-secondaryLightTextColor">
              We hire the best and empower them to continuously learn and grow, ensuring that we
              stay at the forefront of industry trends and emerging technologies.
            </p>
          </div>
          <Icon
            id="quotes"
            className="absolute left-[635px] top-0 h-[97px] w-[99px] fill-accentYellowColor"
          />
        </div>
        <div className="pt-[60px]">
          <h2 className="mb-[40px] text-whiteTextColor">Meet the team</h2>
          <div className="mr-[-80px] overflow-hidden">
            <ul
              className={`flex gap-[20px]`}
              style={{
                width: `calc(340px * ${teamMembers.length} + ${(teamMembers.length - 1) * 20}px)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} item={member as TeamMember} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
