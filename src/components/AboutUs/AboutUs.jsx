import MainTitle from "../../common/MainTitle/MainTitle";
import { AboutUsComponent, SecondaryText, SubTitle } from "./AboutUs.styled";

function AboutUs({ name }) {
  return (
    <AboutUsComponent>
      <div>
        <MainTitle>
          Who <span>we are</span>
        </MainTitle>
        <div>
          <SubTitle mb={20}>
            <span>a team of enthusiasts </span>
            who are fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </SubTitle>
          <SubTitle mb={40}>
            <span>We believe </span>that nature has the power to inspire,
            strengthen character and provide new perspectives. Therefore, each
            of our tours is aimed at unlocking your potential, enriching your
            spiritual world and creating unforgettable memories.
          </SubTitle>
        </div>
        <SecondaryText>
          <span>From vacationers </span>
          <span>to active travelers</span>
          <span>we have a tour for everyone.</span>
        </SecondaryText>
      </div>
      <SubTitle>
        <span>We use methods </span>
        that are time-tested and proven. Our expert guides with in-depth
        knowledge of the Carpathian landscapes lead you safely through the
        mysteries of these mountains.
      </SubTitle>
    </AboutUsComponent>
  );
}

export default AboutUs;
