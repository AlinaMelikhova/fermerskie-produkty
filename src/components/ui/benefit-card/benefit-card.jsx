import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Benefit, BenefitIcon, CardWrapper, Text } from "./styles";

function BenefitCard({ name, about, isNegative, owner, level }) {
  return (
    <Benefit isNegative={isNegative}>
      <CardWrapper>
        <BenefitIcon isNegative={isNegative}>{owner}</BenefitIcon>
        <Title size={TitleSize.EXTRA_SMALL} level={level}>
          {name}
        </Title>
      </CardWrapper>
      <Text>{about}</Text>
    </Benefit>
  );
}

export default BenefitCard;
