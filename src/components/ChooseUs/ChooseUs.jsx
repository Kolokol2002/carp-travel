import MainTitle from "../../common/MainTitle/MainTitle";

export const ChooseUsFirst = () => {
  return (
    <section>
      <MainTitle className="mb-[37px] tablet:mb-[88px] tablet:text-center">
        Choose <span>US</span>
      </MainTitle>
      <p>
        Your chance to join our passionate team in Carpathian tourism. Seeking
        talented professionals to share our common mission.{" "}
      </p>
      <h3>Why us ?</h3>
      <ul>
        <li>
          <h4>Professional development</h4>
          <p>
            We offer growth opportunities and a creative environment to nurture
            your talents.
          </p>
        </li>
        <li>
          <h4>Teamwork</h4>
          <p>
            Join our close-knit family, where support and inspiration abound.
          </p>
        </li>
        <li>
          <h4>Stimulating work environment</h4>
          <p>Flexibility and remote options for a comfortable experience.</p>
        </li>
        <li>
          <h4>Exciting challenges</h4>
          <p>
            Unleash your potential through unforgettable projects showcasing
            Carpathian beauty.
          </p>
        </li>
      </ul>
    </section>
  );
};

export const ChooseUsSecond = () => {
  return <section></section>;
};
