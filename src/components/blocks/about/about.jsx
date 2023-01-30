import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Text, StyledSection, TextWrapper } from "./styles";

function About({ level }) {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG} level={level}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
