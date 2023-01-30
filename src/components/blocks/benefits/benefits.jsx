import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import BenefitCard from "/src/components/ui/benefit-card/benefit-card";
import Button from "/src/components/ui/button/button";
import { StyledSection, StyledList, StyledListItem } from "./styles";

function Benefits({ benefits }) {
  return (
    <StyledSection>
      {benefits?.length ? (
        <>
          <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
            Почему фермерские продукты лучше?
          </Title>
          <StyledList>
            {benefits.map((benefit) => (
              <StyledListItem key={benefit.id}>
                <BenefitCard {...benefit} />
              </StyledListItem>
            ))}
          </StyledList>
          <Button minWidth={260} link="/buy">
            Купить
          </Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default Benefits;
