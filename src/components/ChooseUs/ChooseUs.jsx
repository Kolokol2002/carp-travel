import { useMediaQuery } from "react-responsive";
import MainTitle from "../../common/MainTitle/MainTitle";
import {
  ChooseUsFirstSection,
  ContainerContant,
  ContainerTitleSub,
  Item,
  ItemSubtitle,
  ItemTitle,
  List,
  Subtitle,
  Title,
} from "./ChooseUs.styled";
import Form from "./Form/Form";

export const ChooseUsFirst = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <ChooseUsFirstSection>
      <MainTitle className="mb-[37px] tablet:mb-[58px]">
        Choose <span>US</span>
      </MainTitle>
      <ContainerTitleSub>
        <Subtitle>
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.{" "}
        </Subtitle>
        <Title>Why us ?</Title>
      </ContainerTitleSub>
      <ContainerContant>
        <List>
          <Item>
            <ItemTitle>Professional development</ItemTitle>
            <ItemSubtitle>
              We offer growth opportunities and a creative environment to
              nurture your talents.
            </ItemSubtitle>
          </Item>
          <Item>
            <ItemTitle>Teamwork</ItemTitle>
            <ItemSubtitle>
              Join our close-knit family, where support and inspiration abound.
            </ItemSubtitle>
          </Item>
          <Item>
            <ItemTitle>Stimulating work environment</ItemTitle>
            <ItemSubtitle>
              Flexibility and remote options for a comfortable experience.
            </ItemSubtitle>
          </Item>
          <Item>
            <ItemTitle>Exciting challenges</ItemTitle>
            <ItemSubtitle>
              Unleash your potential through unforgettable projects showcasing
              Carpathian beauty.
            </ItemSubtitle>
          </Item>
        </List>
        {!isMobile && <Form />}
      </ContainerContant>
    </ChooseUsFirstSection>
  );
};

export const ChooseUsSecond = () => {
  return (
    <section>
      <Form />
    </section>
  );
};
