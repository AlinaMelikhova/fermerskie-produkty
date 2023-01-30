import React from "react";
import { StyledSlide, SlideImg, SlideInfoWrapper } from "./styles.js";

import Title, { TitleSize } from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";
import {
  CardDescription,
  CardCharacteristics,
  CardProperties
} from "/src/components/ui/options-list/options-list";

function ProductCard({ buyOption }) {
  const tabs = [
    {
      title: "Описание",
      content: <CardDescription options={buyOption} />
    },
    {
      title: "Характеристики",
      content: <CardCharacteristics options={buyOption.characteristics} />
    },
    {
      title: "Описание",
      content: <CardProperties options={buyOption.properties} />
    }
  ];

  return (
    <StyledSlide>
      <SlideImg />
      <SlideInfoWrapper>
        <Title level={3} size={TitleSize.SMALL}>
          {buyOption.description}
        </Title>
        <Tabs tabs={tabs} />
      </SlideInfoWrapper>
    </StyledSlide>
  );
}

export default ProductCard;
